import React, { useRef, useState, useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const handleSave = () => {
    const newText = inputRef.current.value.trim();
    if (newText) {
      dispatch({
        type: 'EDIT_TASK',
        payload: { id: task.id, text: newText },
      });
      setIsEditing(false);
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      {isEditing ? (
        <>
          <input ref={inputRef} defaultValue={task.text} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
