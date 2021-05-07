import { OBTENER_TAREAS, STATUS_EDITAR_TAREA, TEXTO_EDITAR_TAREA, TEXTO_NUEVA_TAREA } from "../types";



export const task = {
    _id: "",
    body: "",
    status: true
}

export const initialState = {
    filter:'',
    list:[],
    task,
    edit:false,
    editTask:task,
    delete:false,
    allTask:true,
    pendingTask:false,
    finishedTask:false,
};

export const tareas = ( 
    state=initialState,
    actions={type:'',payload: String| Boolean | [] | Number | task} 
) => {
    switch( actions.type){
        case OBTENER_TAREAS:
            return {
                ...state,
                list:actions.payload
            };
        case TEXTO_NUEVA_TAREA:
            return {
                ...state,
                task:{
                    ...state.task,
                    body:actions.payload
                }
            };
        case EDITAR_TAREA:
            return{
                ...state,
                edit:true,
                editTask:actions.payload,
            };
        case VACIAR_EDITAR_TAREA:
            return{
                ...state,
                edit:false,
                editTask:task,
            };
        case TEXTO_EDITAR_TAREA:
            return{
                ...state,
                editTask:{
                    ...state.editTask,
                    body:actions.payload,
                },
            };
        case STATUS_EDITAR_TAREA:
            return{
                ...state,
                editTask:{
                    ...state.editTask,
                    status:actions.payload,
                },
            };
        case ELIMINAR_TAREA:
            return{
                ...state,
                edit:false,
                editTask:actions.payload,
                delete:true
            };
        default:
            return state;
    }
}