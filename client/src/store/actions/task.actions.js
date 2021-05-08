import { getAllTask, postTask, putTask } from "../../api/tareas.api";
import { EDITAR_TAREA, FILTRO_TAREAS, OBTENER_TAREAS, TEXTO_NUEVA_TAREA, VACIAR_EDITAR_TAREA } from "../types"


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

export const updateTask = (value) => {

    return async dispatch =>{
        const {data, message} = await postTask(value);
        console.log(message,data);
        dispatch(cancelEditTask());
    }
}