import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { initialState, tareas } from './reducer/task.reducers';

export default createStore(
    tareas,
    initialState,
    applyMiddleware(thunk)
);