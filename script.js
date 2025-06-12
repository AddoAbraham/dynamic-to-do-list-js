function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a <li> for the task
  const li = document.createElement("li");

  // Create a <span> for the task text (for editing later)
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Done button
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.classList.add("done-btn");
  doneBtn.addEventListener("click", () => {
    taskSpan.classList.toggle("completed");
  });

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit your task:", taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      taskSpan.textContent = newTask.trim();
    }
  });

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Append buttons and task to <li>
  li.appendChild(taskSpan);
  li.appendChild(doneBtn);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);

  // Add <li> to the task list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}
