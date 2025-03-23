import { TodoList } from './todo.js';

const myTodoList = new TodoList();

myTodoList.addTask("Buy groceries");
myTodoList.addTask("Walk the dog");
myTodoList.addTask("Read a book");

myTodoList.markComplete(1);

myTodoList.listTasks();
