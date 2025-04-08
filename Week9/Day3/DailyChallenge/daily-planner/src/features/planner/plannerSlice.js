import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksByDate: {},
  selectedDate: new Date().toISOString().split('T')[0],
};

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    selectDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state.tasksByDate[date]) {
        state.tasksByDate[date] = [];
      }
      state.tasksByDate[date].push({ id: Date.now(), ...task });
    },
    editTask: (state, action) => {
      const { date, taskId, updatedTask } = action.payload;
      const tasks = state.tasksByDate[date];
      const taskIndex = tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      state.tasksByDate[date] = state.tasksByDate[date].filter((task) => task.id !== taskId);
    },
  },
});

export const { selectDate, addTask, editTask, deleteTask } = plannerSlice.actions;
export default plannerSlice.reducer;
