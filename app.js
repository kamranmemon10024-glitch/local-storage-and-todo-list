let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let editIndex = -1;

function addTask() {

    let text = taskInput.value;

    if (text == "") {
        alert("Please enter a task");
        return;
    }

    if (editIndex == -1) {

        tasks.push(text);

    } else {

        tasks[editIndex] = text;

        editIndex = -1;
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    showTasks();
    // const addTask = taskInput.value;
    const obj = {
        title:  input.value,
        creatAt: Date.now()
    }
    console.log(taskInput);
}



function showTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {

        let div = document.createElement("div");
        div.className = "task";

        let span = document.createElement("span");
        span.innerText = task;

        let editButton = document.createElement("button");
        editButton.innerText = "Edit";

        editButton.onclick = function () {
            editTask(index);
        };

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";

        deleteButton.onclick = function () {
            deleteTask(index);
        };

        div.appendChild(span);
        div.appendChild(editButton);
        div.appendChild(deleteButton);

        taskList.appendChild(div);
    });
    const showTasks = taskList.value;
    const obj = {
        title: taskList,
        creatAt: Date.now()
    }
}


function editTask(index) {

    taskInput.value = tasks[index];

    editIndex = index;

    taskInput.focus();

    const deletetask = setItem.value;
    const obj = {
        title: setItem,
        creatAt: Date.now()
    }
}




function deleteTask(index) {

    tasks = tasks.filter(function (task, i) {

        return i != index;

    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTasks();
    const deletetask = setItem.value;
    const obj = {
        title: setItem,
        creatAt: Date.now()
    }

}

showTasks();



