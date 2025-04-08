export const addTask = (task) =>{
    return{
        type: 'ADD_TASK',
        payload: task
    };
};

export const removeTask = (taskId) =>{
    return {
        type:'REMOVE_TASK',
        payload:taskId
    };
};

export const initTask = (tasks) =>({
    type:'INIT_TASKS',
    payload:tasks
});