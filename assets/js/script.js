//Gets the ID #save-task from button
var buttonEl = document.querySelector("#save-task");
//Gets the ID #task-to-do from button
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

//Listens to the id and if click, then it'll call the function createTaskHandler
buttonEl.addEventListener("click", createTaskHandler);
