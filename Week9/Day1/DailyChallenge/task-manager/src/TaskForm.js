import React, { useRef, useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskForm = () => {
  const inputRef = useRef();
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = e => {
    e.preventDefault();
    const text = inputRef.current.value.trim();
    if (text) {
      dispatch({ type: 'ADD_TASK', payload: text });
      inputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} placeholder="Add a task..." />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
