let contador = 0 

function CreateTaskModel(task) {

    contador++

    let taskModel = document.createElement("div")
    taskModel.id = `task-${contador}`
    taskModel.classList = "TaskModel"
    taskModel.innerHTML = `
    
        <p id = "task_text"><mark>${task}</mark><input type="checkbox" class="sim" id="${contador}"></p>
        <button id="${contador}" class="delete-task-btn"><img src="images/DELET.PNG" width="50px"></button>
        <p>_____________________________________________</p>

    `

    return taskModel

}

export { CreateTaskModel }