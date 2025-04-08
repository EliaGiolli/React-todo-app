export const taskReducer = (state,action )=>{
    switch(action.type){
        case 'ADD_TASK':
            return [...state,action.payload];
        case 'REMOVE_TASK':
            return state.filter(task => task.id !== action.payload );
        case "TOGGLE_TASK":
            return state.map(task =>
                task.id === action.payload ? { ...task, isCompleted: !task.isCompleted } : task);
        case 'INIT_TASKS':
            return action.payload;
        default:
            return state;
    }
}