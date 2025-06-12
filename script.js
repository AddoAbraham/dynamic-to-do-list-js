// Run the code when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select the Add Task button
  const addButton = document.getElementById("add-task-btn");
  // Select the task input field
  const taskInput = document.getElementById("task-input");
  // Select the task list
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // Remove spaces

    // Validate input
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create list item for task
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Add event to remove task when clicked
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Add button to the task item
    li.appendChild(removeBtn);
    // Add task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  }

  // Add task when button is clicked
  addButton.addEventListener("click", addTask);

  // Add task when Enter key is pressed in input
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
