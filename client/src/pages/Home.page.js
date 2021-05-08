import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TareasForm from '../components/molecules/TareasForm';
import { loadList } from '../store/actions/task.actions';
import SteperTask from '../components/molecules/SteperTask';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadList());
    });

    return (<>          
        <SteperTask />  
        <TareasForm />
    </>);
}

export default HomePage;