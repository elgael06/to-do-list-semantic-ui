import { useDispatch, useSelector } from 'react-redux';
import { acticarEdicionTarea, cancelEditTask, changeStatus, deleteTask, updateTask } from '../../store/actions/task.actions';
import CardTarea from './CardTarea';
import ContentTareas from '../atoms/ContentTareas';
import { TEXTO_EDITAR_TAREA } from '../../store/types';

const ListViewTareas = ()=>{

    const {list,editTask } = useSelector(state=> state);
    const dispatch = useDispatch();

    const selectEdit = (value) => {
        dispatch(acticarEdicionTarea(value));
    }
    const selectDelete = (value) => {
        console.log(value);
        if(window.confirm(`Eliminar tarea : ${value.body}`));
            dispatch(deleteTask(value._id));
    }
    const cancelarEdicion = () => {
        dispatch(cancelEditTask());
    }
    const saveEditTask = () => {
        dispatch(updateTask(editTask));
    }
    const handleChangeStatus=(value)=>{
        dispatch(changeStatus(value));
    }
    const handleChange= (e) => {
        dispatch({type:TEXTO_EDITAR_TAREA,payload:e.target.value})
    }

    return (<ContentTareas>   
        {
            list.map(item =>{
                const status    = editTask._id === item._id;
                const textTask  = status ? editTask.body : item.body;

                return <CardTarea 
                    id                  = {item._id}
                    key                 = {item._id} 
                    save                = {saveEditTask}
                    body                = {textTask} 
                    status              = {item.status} 
                    active              = {status}
                    cancel              = {cancelarEdicion}
                    onSelect            = {()=>selectEdit(item)}
                    onDelete            = {()=>selectDelete(item)}
                    handleChange        = {handleChange}                
                    handleChangeStatus  = {()=>handleChangeStatus(item)}
                />
            })
        }             
    </ContentTareas>);
}
export default ListViewTareas;