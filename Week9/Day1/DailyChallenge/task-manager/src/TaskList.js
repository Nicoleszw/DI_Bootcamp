import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext);

  const filtered = state.tasks.filter(task => {
    if (state.filter === 'active') return !task.completed;
    if (state.filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'all' })}>
          All
        </button>
        <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'active' })}>
          Active
        </button>
        <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'completed' })}>
          Completed
        </button>
      </div>

      <ul>
        {filtered.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
