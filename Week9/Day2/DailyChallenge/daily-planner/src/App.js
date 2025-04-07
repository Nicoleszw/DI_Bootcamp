import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, editTask, deleteTask } from './redux/actions';
import DatePicker from './components/DatePicker';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  const [editingTask, setEditingTask] = useState(null);
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasksByDate[selectedDate] || []);

  const handleAddOrEditTask = ({ title, description }) => {
    const task = editingTask
      ? { ...editingTask, title, description }
      : { id: uuidv4(), title, description };
    if (editingTask) {
      dispatch(editTask(selectedDate, task));
      setEditingTask(null);
    } else {
      dispatch(addTask(selectedDate, task));
    }
  };

  const handleDeleteTask = id => {
    dispatch(deleteTask(selectedDate, id));
  };

  return (
    <div>
      <h1>Daily Planner</h1>
      <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <TaskForm onSubmit={handleAddOrEditTask} existingTask={editingTask} />
      <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
