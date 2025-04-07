import React from 'react';
import { TaskProvider } from './TaskContext';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  return (
    <TaskProvider>
      <div style={{ padding: '20px' }}>
        <h1>📝 Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
