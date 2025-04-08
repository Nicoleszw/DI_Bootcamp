import React from 'react';
import { useSelector } from 'react-redux';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

function TaskList() {
  const { selectedDate, tasksByDate } = useSelector((state) => state.planner);
  const tasks = tasksByDate[selectedDate] || [];

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <EditTask task={task} />
          <DeleteTask taskId={task.id} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
