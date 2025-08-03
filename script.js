// 1. Get the required elements from the HTML
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// 2. Define the addTask function
function addTask() {
    // Get and trim the input value
    const taskText = taskInput.value.trim();

    // Check if taskText is empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new <li> element and set its text
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a new "Remove" button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // When clicked, the button removes its parent <li> from the task list
    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Add the button to the <li>, then the <li> to the task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// 3. When the "Add Task" button is clicked, call addTask
addButton.addEventListener('click', addTask);

// 4. Also add a keyboard listener so pressing "Enter" adds the task
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
