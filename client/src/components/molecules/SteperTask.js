import { useDispatch } from 'react-redux';
import { Step } from 'semantic-ui-react'
import { loadList, loadListFinish } from '../../store/actions/task.actions';


const SteperTask = () => {
    const dispatch = useDispatch();

    return ( <Step.Group vertical={false} fluid>
        <Step content='Todas' onClick={()=>dispatch(loadList())} />
        <Step content='Terminadas' onClick={()=>dispatch(loadListFinish())} />
      </Step.Group>);
}

export default SteperTask;