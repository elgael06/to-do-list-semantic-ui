import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TareasForm from '../components/molecules/TareasForm';
import { loadList } from '../store/actions/task.actions';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadList());
    });

    return (<>            
        <TareasForm />
    </>);
}

export default HomePage;