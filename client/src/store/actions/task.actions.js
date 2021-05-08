import { deleteTaskId, getAllTask, getcompleteTask, postTask, putTask } from "../../api/tareas.api";
import { CANCELAR_ELIMINAR_TAREA, EDITAR_TAREA, ELIMINAR_TAREA, FILTRO_TAREAS, OBTENER_TAREAS, TEXTO_NUEVA_TAREA, VACIAR_EDITAR_TAREA } from "../types"


export const changeFilter = (value='' )=>{
    return dispatch=>{
        dispatch({
            type:FILTRO_TAREAS,
            payload:{text:value,status:true},
        });
        setTimeout(()=>{
            dispatch({
                type:FILTRO_TAREAS,
                payload:{text:value,status:false},

            });
        },300);
    }
}

export const loadList = () =>{
    return async dispatch => {
        const res = await getAllTask();
        dispatch({
            type:OBTENER_TAREAS,
            payload:res.data            
        });
    }
}

export const loadListFinish = () =>{
    return async dispatch => {
        const res = await getcompleteTask();
        console.log(res);
        dispatch({
            type:OBTENER_TAREAS,
            payload:res.data            
        });
    }
}


export const handleTextTareaNueva = (value='') => {
    return {
        type:TEXTO_NUEVA_TAREA,
        payload:value
    }
} 

export const sendSaveTask = (value) => {
    return async dispatch =>{
        const {data,message} = await putTask(value);
        console.log(message,data);
        dispatch({
            type:TEXTO_NUEVA_TAREA,
            payload:''
        });
        dispatch(loadList());
    }
}

export const acticarEdicionTarea = (tarea) => {
    return{
        type:EDITAR_TAREA,
        payload:tarea
    }
}

export const cancelEditTask = () => {
    return dispatch=>{
        dispatch(loadList());
        dispatch({type:VACIAR_EDITAR_TAREA});        
    }
}

export const changeStatus = (value) => {
    return dispatch =>{
        value.status = !value.status; 
        dispatch(updateTask(value));
    }
}

export const updateTask = (value) => {

    return async dispatch =>{
        const {data, message} = await postTask(value);
        console.log(message,data);
        dispatch(cancelEditTask());
    }
}

export const confirmDelete = (value) => {
    return {
        type:ELIMINAR_TAREA,
        payload:value,
    }
}

export const cancelarEliminar = () =>{
    return {
        type:CANCELAR_ELIMINAR_TAREA
    }
}

export const deleteTask = (id) => {
    return async dispatch => {
        const {data, message} = await deleteTaskId(id);
        console.log(data,message);
        dispatch(cancelEditTask());
        dispatch(loadList()); 
        dispatch(cancelarEliminar());
    }
}