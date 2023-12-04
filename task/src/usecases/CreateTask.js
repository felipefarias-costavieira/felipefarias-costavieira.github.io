import { CreateTaskModel } from "./CreateTaskModel.js"
import { Success } from "./messages/success.message.js"
import { Error } from "./messages/error.message.js"

function CreateTask(){

    const success = new Success()
    const error = new Error()

    try {  

        const task = document.querySelector("#taskInput").value
        if (!task){
            throw error.invalid_input()
        }

        const taskModel = CreateTaskModel(task)
          
        const taskContainer = document.querySelector("#taskContainer")
        taskContainer.appendChild(taskModel)

        success.create()

    } catch (err) {
        if(err){
            error.create()
            console.error(err)
        }
       
    }

}

export { CreateTask }