const taskInput = document.querySelector(".task-input input");

let todos = JSON.parse(localStorage.getItem("todo-list"));

function showTodo() {
    todos.forEach((todo, id) => {
        console.log(id, todo);
    });
}

showTodo();

taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if (e.key == "Enter" && userTask) {
        if (!todos) {
            todos = [];
        }
        taskInput.value = "";
        let taskInfo = {name: userTask, status: "pending"};
        todos.push(taskInfo);
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo();
    }
});