// Get references to HTML elements
const taskInput = document.getElementById("task");
const dueDateInput = document.getElementById("due-date");
const tasksContainer = document.getElementById("tasks");

// Initialize tasks array
let tasks = [];

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a task object
    const task = {
        text: taskText,
        dueDate: dueDate
    };

    // Add the task to the tasks array
    tasks.push(task);

    // Clear the input fields
    taskInput.value = "";
    dueDateInput.value = "";

    // Render the tasks
    renderTasks();
}

// Function to render tasks
function renderTasks() {
    tasksContainer.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";
        taskDiv.innerHTML = `
            <p>${task.text}</p>
            <p>Due Date: ${task.dueDate}</p>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        tasksContainer.appendChild(taskDiv);
    });
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Initial rendering
renderTasks();


//Function to add tasks to databse
