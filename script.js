// Wait until the full HTML is loaded before running JS
document.addEventListener("DOMContentLoaded", () => {
  // 1. Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // 2. Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim(); // remove extra spaces

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create a new <li> element for the task
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Add click event to remove the task
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Add the button to the list item
    li.appendChild(removeBtn);

    // Add the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // 3. Event listener for button click
  addButton.addEventListener("click", addTask);

  // 4. Event listener for Enter key press in input
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
