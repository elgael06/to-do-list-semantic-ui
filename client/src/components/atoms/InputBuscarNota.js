import { useDispatch, useSelector } from 'react-redux';
import {Grid,Form,Input} from 'semantic-ui-react';
import { changeFilter } from '../../store/actions/task.actions';

const InputBuscarNota = ()=>{
    const {filter,loadingFilter } = useSelector(state=> state);
    const dispatch = useDispatch();

    return(<Grid>
        <Grid.Column textAlign='center' mobile={16} tablet={16} computer={16}>
            <Form onSubmit={()=>console.log('Buscar tarea...')} >
                <Input 
                    fluid
                    loading={loadingFilter}
                    placeholder='Buscar tarea...'
                    icon='search'    
                    value={filter}
                    onChange={e=>dispatch(changeFilter(e.target.value))}
                />
            </Form>
        </Grid.Column>
    </Grid>);
}

export default InputBuscarNota;