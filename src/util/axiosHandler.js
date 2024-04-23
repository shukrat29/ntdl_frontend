import axios from 'axios';
// const apiEP = " http://localhost:8000/api/v1/tasks";
// const apiEP = ' https://ntdl-fullstack-backend.onrender.com/api/v1/tasks';
const apiEP = import.meta.env.API_URL + '/api/v1/tasks';

export const postNewTask = async (taskObj) => {
  try {
    const { data } = await axios.post(apiEP, taskObj);

    return data;
  } catch (error) {
    console.log(error);
    return {
      status: 'error',
      message: error.message,
    };
  }
};

export const getAllTasks = async () => {
  try {
    const response = await axios.get(apiEP);
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      status: 'error',
      message: error.message,
    };
  }
};

export const deleteTasks = async (ids) => {
  try {
    const response = await axios.delete(apiEP, { data: ids });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      status: 'error',
      message: error.message,
    };
  }
};

export const updateTask = async (obj) => {
  try {
    const { data } = await axios.patch(apiEP, obj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: 'error',
      message: error.message,
    };
  }
};
