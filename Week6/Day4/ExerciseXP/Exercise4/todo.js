export class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(taskDescription) {
      const task = {
        description: taskDescription,
        completed: false
      };
      this.tasks.push(task);
      console.log(`Added task: "${taskDescription}"`);
    }
  
    markComplete(index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index].completed = true;
        console.log(`Marked task "${this.tasks[index].description}" as complete.`);
      } else {
        console.log("Invalid task index.");
      }
    }
  
    listTasks() {
      console.log("\nTodo List:");
      this.tasks.forEach((task, i) => {
        const status = task.completed ? "Completed" : "Incomplete";
        console.log(`${i + 1}. ${task.description} - ${status}`);
      });
      console.log(""); 
    }
  }
  