const tasks = [];
let taskIdCounter = 0;

document.getElementById("taskForm").addEventListener("submit", function (e) {
    e.preventDefault();
    addTask();
});

document.getElementById("clearBtn").addEventListener("click", function () {
    document.querySelector(".listTasks").innerHTML = "";
    tasks.length = 0; 
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const task = {
        task_id: taskIdCounter++,
        text: taskText,
        done: false
    };
    tasks.push(task);

    renderTask(task);
    taskInput.value = "";
}

function renderTask(task) {
    const taskList = document.querySelector(".listTasks");

    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    taskItem.setAttribute("data-task-id", task.task_id);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", () => deleteTask(task.task_id));

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => toggleTask(task.task_id));

    const taskLabel = document.createElement("span");
    taskLabel.classList.add("taskText");
    taskLabel.textContent = task.text;

    taskItem.appendChild(deleteBtn);
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskLabel);
    taskList.appendChild(taskItem);
}

function deleteTask(taskId) {
    const index = tasks.findIndex((task) => task.task_id === taskId);
    if (index !== -1) {
        tasks.splice(index, 1);
        document.querySelector(`[data-task-id="${taskId}"]`).remove();
    }
}

function toggleTask(taskId) {
    const task = tasks.find((t) => t.task_id === taskId);
    if (task) {
        task.done = !task.done;
        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        taskElement.classList.toggle("completed", task.done);
    }
}
