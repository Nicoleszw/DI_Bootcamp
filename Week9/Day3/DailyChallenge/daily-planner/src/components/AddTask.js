import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/planner/plannerSlice';

function AddTask() {
  const [text, setText] = useState('');
  const selectedDate = useSelector((state) => state.planner.selectedDate);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTask({ date: selectedDate, task: { text } }));
      setText('');
    }
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New task" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTask;
