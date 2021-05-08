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
export const postTask = async (task) => {
    const {data} = await axios.post(`/api/Task/${task._id}`,task);
    return  data;
}

export const deleteTaskId = async (id) => {
    const {data} = await axios.delete(`/api/Task/${id}`);
    return  data;
}