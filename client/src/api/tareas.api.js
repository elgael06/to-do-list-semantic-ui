import axios from "axios";


export const getAllTask = async () => {
    const {data} = await axios.get('/api/Task/');
    return  data;
}

export const getIdTask = () => {

}

export const putTask = async (task) => {
    const {data} = await axios.put('/api/Task/',task);
    return  data;
}

export const deleteTaskId = () => {
    
}