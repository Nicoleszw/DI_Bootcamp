import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../features/planner/plannerSlice';

function DeleteTask({ taskId }) {
  const selectedDate = useSelector((state) => state.planner.selectedDate);
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(deleteTask({ date: selectedDate, taskId }))}>Delete</button>;
}

export default DeleteTask;
