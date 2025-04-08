import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from '../features/planner/plannerSlice';

function EditTask({ task }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);
  const selectedDate = useSelector((state) => state.planner.selectedDate);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editTask({ date: selectedDate, taskId: task.id, updatedTask: { text } }));
    setEditing(false);
  };

  return editing ? (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </>
  ) : (
    <button onClick={() => setEditing(true)}>Edit</button>
  );
}

export default EditTask;
