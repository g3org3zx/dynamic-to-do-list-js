// Select the input, button, and task list
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Define the addTask function
function addTask() {
    // Get and trim the input value
    const taskText = taskInput.value.trim();

    // If input is empty, alert the user
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    // Create a new <li> element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create the remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // When the remove button is clicked, remove the task
    removeButton.onclick = function () {
        taskList.removeChild(li);
    };

    // Append the button to the list item, and the item to the list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Add click event to the "Add Task" button
addButton.addEventListener('click', addTask);

// Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
