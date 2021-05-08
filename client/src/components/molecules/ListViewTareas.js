import { useDispatch, useSelector } from 'react-redux';
import { acticarEdicionTarea } from '../../store/actions/task.actions';
import CardTarea from '../atoms/CardTarea';
import ContentTareas from '../atoms/ContentTareas';

const ListViewTareas = ()=>{
    const {list, } = useSelector(state=> state);
    const dispatch = useDispatch();

    const selectEdit = (value) => {
        dispatch(acticarEdicionTarea(value));
    }
    const selectDelete = (value) => {
        console.log(value);
    }
 
    return (<ContentTareas>   
        {
            list.map(item => <CardTarea 
                key={item._id} 
                id={item._id}
                body={item.body} 
                status={item.status} 
                onSelect={()=>selectEdit(item)}
                onDelete={()=>selectDelete(item)}
            />)
        }             
    </ContentTareas>);
}
export default ListViewTareas;