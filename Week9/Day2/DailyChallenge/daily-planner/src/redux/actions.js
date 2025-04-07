import { taskActionTypes } from './tasksReducer';

export const addTask = (date, task) => ({
  type: taskActionTypes.ADD_TASK,
  payload: { date, task },
});

export const editTask = (date, task) => ({
  type: taskActionTypes.EDIT_TASK,
  payload: { date, task },
});

export const deleteTask = (date, taskId) => ({
  type: taskActionTypes.DELETE_TASK,
  payload: { date, taskId },
});
