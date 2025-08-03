document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage when page loads
    loadTasks();

    // Function to add a new task
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();

        // Check if input is not empty
        if (taskText !== '') {
            // Create new list item
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');

            // Assign onclick event to remove button
            removeBtn.onclick = () => {
                taskList.removeChild(li);
                // Update localStorage after removal
                updateLocalStorage();
            };

            // Append remove button to list item and list item to task list
            li.appendChild(removeBtn);
            taskList.appendChild(li);

            // Clear input field
            taskInput.value = '';

            // Save to localStorage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        } else {
            alert('Please enter a task!');
        }
    }

    // Function to load tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            // Create new list item
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');

            // Assign onclick event to remove button
            removeBtn.onclick = () => {
                taskList.removeChild(li);
                updateLocalStorage();
            };

            // Append remove button to list item and list item to task list
            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }

    // Function to update localStorage after task removal
    function updateLocalStorage() {
        const tasks = Array.from(taskList.children).map(li => 
            li.firstChild.textContent.trim()
        );
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Attach event listener to add button
    addButton.addEventListener('click', addTask);

    // Attach event listener for Enter key press in input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
