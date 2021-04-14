const toDoForm = document.querySelector(".todo-questions");
const toDoInput = document.querySelector(".left-todo-question");
const toDoListContainer = document.querySelector(".todo-list");

function saveToDo() {
	localStorage.myToDo = toDoListContainer.innerHTML;
}

function handleList(event) {
	let item = event.target;
	if (item.classList.contains("checked")) {
		console.log("will remove");
		item.parentNode.removeChild(item);
	}
	else
		item.classList.add("checked");
	saveToDo();
}

function addToDo(event) {
	event.preventDefault();
	toDoListContainer.innerHTML += "<li>" + toDoInput.value + "</li>";
	toDoInput.value = "";
	saveToDo();
}

function getToDo() {
	let localToDo = localStorage.myToDo;
	if (!localToDo) {
		toDoListContainer.innerHTML = "<li>Click when you did it</li>";
	}
	else {
		toDoListContainer.innerHTML = localToDo;
	}
}

function loadToDoList() {
	toDoForm.addEventListener("submit", addToDo);
	toDoListContainer.addEventListener("click", handleList);
	getToDo();
}

function init() {
	loadToDoList();
}

init();