// Wait for DOM to fully load before running script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage when page loads
    loadTasks();

    // Function to add a new task
    function addTask(taskText, save = true) {
        // Get and trim input value
        const text = taskText || taskInput.value.trim();

        // Check if input is empty
        if (text === '') {
            alert('Please enter a task!');
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = text;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add click event listener to remove button
        removeBtn.onclick = () => {
            taskList.removeChild(li);
            // Update localStorage after removal
            updateLocalStorage();
        };

        // Append remove button to list item and list item to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        if (!taskText) {
            taskInput.value = '';
        }

        // Save to localStorage if not loading from storage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(text);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Function to load tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Function to update localStorage after task removal
    function updateLocalStorage() {
        const tasks = Array.from(taskList.children).map(li => 
            li.firstChild.textContent.trim()
        );
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Event listener for add button click
    addButton.addEventListener('click', () => addTask());

    // Event listener for Enter key press in input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
