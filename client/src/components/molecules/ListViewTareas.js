import { useDispatch, useSelector } from 'react-redux';
import { acticarEdicionTarea, cancelEditTask, updateTask } from '../../store/actions/task.actions';
import CardTarea from './CardTarea';
import ContentTareas from '../atoms/ContentTareas';

const ListViewTareas = ()=>{
    const {list,editTask } = useSelector(state=> state);
    const dispatch = useDispatch();

    const selectEdit = (value) => {
        dispatch(acticarEdicionTarea(value));
    }
    const selectDelete = (value) => {
        console.log(value);
    }
    const cancelarEdicion = () => {
        dispatch(cancelEditTask());
    }
    const saveEditTask = () => {
        dispatch(updateTask(editTask));
    }
    return (<ContentTareas>   
        {
            list.map(item => <CardTarea 
                key={item._id} 
                id={item._id}
                body={item.body} 
                status={item.status} 
                active={editTask._id===item._id}
                save={saveEditTask}
                cancel={cancelarEdicion}
                onSelect={()=>selectEdit(item)}
                onDelete={()=>selectDelete(item)}
            />)
        }             
    </ContentTareas>);
}
export default ListViewTareas;