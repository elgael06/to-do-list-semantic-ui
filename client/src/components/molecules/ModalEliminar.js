import { useDispatch, useSelector } from 'react-redux';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { cancelarEliminar, deleteTask } from '../../store/actions/task.actions';

const ModalEliminar = () => {
    const dispatch = useDispatch();
    const data = useSelector(state =>state);//editTask 

    const cancel = () => {
        dispatch(cancelarEliminar());
    }
    const confirm = () => {
        dispatch(deleteTask(data.editTask._id));
    }
    return ( <Modal
        basic
        onClose={cancel}
        open={data.delete}
      >
        <Header icon>
          <Icon name='trash' />
          <b>Eliminar Tarea :</b>
          <br/> 
          <small>{data.editTask.body}</small>
        </Header>
        <Modal.Content style={{textAlign:'center'}}>
          <p>
            Una vez eliminado no se podra recuperar?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={cancel}>
            <Icon name='remove' /> NO
          </Button>
          <Button color='green' inverted onClick={confirm}>
            <Icon name='checkmark' /> SI
          </Button>
        </Modal.Actions>
      </Modal>);
}

export default ModalEliminar;