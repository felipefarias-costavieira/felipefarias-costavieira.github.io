import { MessageModel } from "./MessageModel.js";

class Success {

    successColor = '#48fa3e';
    app = document.querySelector('#app')
    
    create(){
        const message = "Legal! Você criou uma nova tarefa!" 
        
        const MessageAlert = MessageModel(message, this.successColor)
        
        app.appendChild(MessageAlert)

        setTimeout(() => {
            document.querySelector('.message-model').remove()
        }, 2000)

        
    }

    update(){
        const message = "Perfeito, sua tarefa foi atualizada"

        const MessageAlert = MessageModel(message, this.successColor)

        app.appendChild(MessageAlert)

        setTimeout(() => {
            document.querySelector('.message-model').remove()
        }, 2000)
    }

    delete(){
        const message = "Otimo, sua tarefa foi deletada corretamente"

        const MessageAlert = MessageModel(message, this.successColor)

        app.appendChild(MessageAlert)

        setTimeout(() => {
            document.querySelector('.message-model').remove()
        }, 2000)
    }
    
}

export { Success }