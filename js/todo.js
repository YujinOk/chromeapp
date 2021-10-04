const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
// to save todoList
const toDos = [];

function saveToDos() {
    // saving the data into string as a part of making them an array
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    // To find out where it is clicked as user clicks delete btn
    // console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
}

// creating <li> from JS
function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    // to put <span> inside of <li>
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    // After saving the value, it empties but not newTodo is empty
    toDoInput.value = "";
    toDos.push(newTodo);
    // console.log(newTodo, toDoInput.value);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// get the data form localStorage and turn it into  array
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(saveToDos);
}
