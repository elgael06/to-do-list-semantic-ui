import { useDispatch, useSelector } from 'react-redux';
import {Grid,Form,Button,Input,Icon} from 'semantic-ui-react';
import { handleTextTareaNueva, sendSaveTask } from '../../store/actions/task.actions';

const InputCrear = ()=>{
    const {task,edit } = useSelector(state=> state);
    const dispatch = useDispatch();

    const onSave = () => {
        if(task.body){
            dispatch(sendSaveTask(task));
        }else alert('falta agregar la tarea...');
    }

    return (<Grid.Column textAlign='center' mobile={16} tablet={16} computer={8}>
        <Form>
            <Input 
                fluid
                disabled={edit}
                loading={false}
                placeholder='nueva tarea...'
                iconPosition='left'
                value={task.body}
                onChange={e=>dispatch(handleTextTareaNueva(e.target.value))}
                >
                <Icon position='left' name='edit' />
                <input  id='text-create-task' />
                <Button disabled={task.body===''} color='green'  onClick={onSave} >agregar</Button>
            </Input>
        </Form>
    </Grid.Column>);
}

export default InputCrear;