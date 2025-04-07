import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from './redux/actions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.completed ? 'Undo' : 'Done'}
      </button>
      <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
    </li>
  );
};

export default TodoItem;
