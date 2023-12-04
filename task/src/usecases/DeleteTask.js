import { Error } from "./messages/error.message.js"
import { Success } from "./messages/success.message.js"


function DeleteTask(id){

    const success = new Success()
    const error = new Error()
    
    try {
        const task = document.querySelector(`#task-${id}`)
        if (!task){
            throw console.error("O id passado não existe")
        }

        task.remove()
        
        success.delete()
    } catch (err) {
        error.delete()
    }

}

export { DeleteTask }