import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import InputBuscarNota from '../components/atoms/InputBuscarNota';
import TareasForm from '../components/molecules/TareasForm';
import { loadList } from '../store/actions/task.actions';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadList());
    });

    return (<>            
        <InputBuscarNota />
        <TareasForm />
    </>);
}

export default HomePage;