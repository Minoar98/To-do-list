// Get tasks from localStorage
let pending = JSON.parse(localStorage.getItem("pending")) || [];
let complete = JSON.parse(localStorage.getItem("complete")) || [];

// Select elements
const inputField = document.getElementById("input");
const addTaskBtn = document.getElementById("btn");
const pendingTask = document.getElementById("pending-task");
const completedTask = document.getElementById("completed-task");

let isEditing = false;
let taskToEdit = null;

// Save current tasks to localStorage
const saveToLocalStorage = () => {
  const pendingTasks = [];
  pendingTask.querySelectorAll("li").forEach((li) => {
    console.log("Pending task: ==============", li);
    const p = li.querySelector("p"); // if exist then 'p' otherwise 'undefined'
    console.log("class ", p.className);
    if (p) {
      // pendingTasks.push(p.textContent);
      pendingTasks.push({
        id: Date.now().toString(), // 1745756511260
        value: p.textContent,
        isEdited: p.className === "bold" ? true : false,
      }); // jdi p er value thake tahole korbo only otherwise not to do.
    }
  });

  console.log("Pending tasks: ======*****========", pendingTasks);

  const completedTasks = [];
  completedTask.querySelectorAll("li").forEach((li) => {
    console.log("Completed task: ==============", li);
    const p = li.querySelector("p");
    // if (p) completedTasks.push(p.textContent);
    if (p) {
      completedTasks.push({
        id: Date.now().toString(), // 1745756511260
        value: p.textContent,
        isEdited: p.className === "bold" ? true : false,
      });
    }
  });

  console.log("Completed tasks: ======*****========", completedTasks);

  // pendingTasks = ['Task 1', 'Task 2', 'Task 3'];
  // JSON.stringify(['Task 1', 'Task 2', 'Task 3'])
  // "['Task 1','Task 2','Task 3']"

  // JSON.parse("['Task 1','Task 2','Task 3']")
  // ['Task 1', 'Task 2', 'Task 3']

  // pendingTasks = [{id: '1745756511260', value: 'Task 1', isEdited: false}];
  // JSON.stringify([{id: '1745756511260', value: 'Task 1', isEdited: false}])
  // "[{'id': '1745756511260', 'value': 'Task 1', 'isEdited': false}]"

  // JSON.parse("[{'id': '1745756511260', 'value': 'Task 1', 'isEdited': false}]")
  // [{id: '1745756511260', value: 'Task 1', isEdited: false}]

  localStorage.setItem("pending", JSON.stringify(pendingTasks));
  localStorage.setItem("complete", JSON.stringify(completedTasks));
};

// Add or Edit a Task
const addOrEditTaskFn = () => {
  let taskText = inputField.value.trim();

  if (taskText === "") {
    alert("😮 Task cannot be empty");
    return;
  }

  if (taskText.length > 10) {
    alert("😮 Task cannot be more than 10 characters");
    return;
  }

  if (isEditing) {
    // Editing existing task
    const p = taskToEdit.querySelector("p");
    p.textContent = taskText;
    p.style.fontWeight = "bold";
    p.className = "bold";

    addTaskBtn.textContent = "Add Task";
    inputField.value = "";
    isEditing = false;
    taskToEdit = null;
  } else {
    // Adding new task
    const li = document.createElement("li");
    const input = document.createElement("input");
    const p = document.createElement("p");
    const button = document.createElement("button");

    input.type = "checkbox";
    p.innerHTML = taskText;
    button.className = "edit";
    button.innerHTML = "✏️";

    li.appendChild(input);
    li.appendChild(p);
    li.appendChild(button);

    pendingTask.appendChild(li);
    inputField.value = "";
  }

  saveToLocalStorage();
};

// Move task to Completed Tasks
const moveToCompleted = (taskItem) => {
  const p = taskItem.querySelector("p");

  const li = document.createElement("li");
  const button = document.createElement("button");
  button.id = "btn-del";
  button.textContent = "🗑️";

  li.appendChild(p);
  li.appendChild(button);
  completedTask.appendChild(li);

  taskItem.remove();
  saveToLocalStorage();
};

// Event Listeners
addTaskBtn.addEventListener("click", addOrEditTaskFn);

// Event Delegation for Pending Tasks
pendingTask.addEventListener("change", (event) => {
  if (event.target.type === "checkbox") {
    const li = event.target.parentNode;
    moveToCompleted(li);
  }
});

// Event Delegation for Completed Tasks (Delete)
completedTask.addEventListener("click", (event) => {
  if (event.target.id === "btn-del") {
    const li = event.target.parentNode;
    li.remove();
    saveToLocalStorage();
  }
});

// Event Delegation for Edit Button
pendingTask.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit")) {
    const button = event.target;
    const li = button.parentNode;
    const p = li.querySelector("p");

    if (p && li) {
      inputField.value = p.textContent;
      addTaskBtn.textContent = "Edit Task";
      isEditing = true;
      taskToEdit = li;
    }
  }
});

// Load existing tasks when page loads
const renderTasks = () => {
  pending.forEach((taskText) => {
    console.log("taskText", taskText);
    const li = document.createElement("li");
    const input = document.createElement("input");
    const p = document.createElement("p");
    const button = document.createElement("button");

    input.type = "checkbox";
    p.innerHTML = taskText.value;
    p.className = taskText.isEdited === true ? "bold" : "";

    button.className = "edit";
    button.innerHTML = "✏️";

    li.appendChild(input);
    li.appendChild(p);
    li.appendChild(button);

    pendingTask.appendChild(li);
  });

  complete.forEach((taskText) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const button = document.createElement("button");

    // p.innerHTML = taskText.value;
    // p.className = taskText.isEdited === true ? "bold" : "";
    p.innerHTML = taskText.value;
    p.className = taskText.isEdited === true ? "bold" : "";

    button.id = "btn-del";
    button.textContent = "🗑️";

    li.appendChild(p);
    li.appendChild(button);

    completedTask.appendChild(li);
  });
};

renderTasks();

// 1. how to store the pending (21 no line) & completed task (while pushing)
// 2. How to detect that this pending or completed task is edited? (isEdited: true/false)
// 3. How to load/render the edited and completed task? (renderTasks function)

// 4. revision the whole todo application & do it by yourself
