const initialState = {
    tasksByDate: {},  
  };
  
  const ADD_TASK = 'ADD_TASK';
  const EDIT_TASK = 'EDIT_TASK';
  const DELETE_TASK = 'DELETE_TASK';
  
  export const taskActionTypes = { ADD_TASK, EDIT_TASK, DELETE_TASK };
  
  const tasksReducer = (state = initialState, action) => {
    const { type, payload } = action;
    const { date } = payload || {};
  
    switch (type) {
      case ADD_TASK:
        return {
          ...state,
          tasksByDate: {
            ...state.tasksByDate,
            [date]: [...(state.tasksByDate[date] || []), payload.task],
          },
        };
  
      case EDIT_TASK:
        return {
          ...state,
          tasksByDate: {
            ...state.tasksByDate,
            [date]: state.tasksByDate[date].map(task =>
              task.id === payload.task.id ? payload.task : task
            ),
          },
        };
  
      case DELETE_TASK:
        return {
          ...state,
          tasksByDate: {
            ...state.tasksByDate,
            [date]: state.tasksByDate[date].filter(task => task.id !== payload.taskId),
          },
        };
  
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  