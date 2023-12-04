import { MessageModel } from "./MessageModel.js";

class Error {

    errorColor = '#ff0000';
    app = document.querySelector('#app')
    
    invalid_input(){
        const message = "opa! Voce digitou um caracter invalido na criação da sua tarefa!" 
        
        const MessageAlert = MessageModel(message, this.errorColor)

        app.appendChild(MessageAlert)

        setTimeout(() => {
            document.querySelector('.message-model').remove()
        }, 2000)
    }

    create(){
        const message = "opa! houve um erro na criação da sua tarefa!" 
        
        const MessageAlert = MessageModel(message, this.errorColor)

        app.appendChild(MessageAlert)

        setTimeout(() => {
            document.querySelector('.message-model').remove()
        }, 2000)
    }

    update(){
        const message = "Putss, sua tarefa não foi atualizada com sucesso"

        const MessageAlert = MessageModel(message, this.errorColor)

        app.appendChild(MessageAlert)

        setTimeout(() => {
            document.querySelector('.message-model').remove()
        }, 2000)
    }

    delete(){
        const message = "ué? sua tarefa não pode ser deletada"

        const MessageAlert = MessageModel(message, this.errorColor)

        app.appendChild(MessageAlert)

        setTimeout(() => {
            document.querySelector('.message-model').remove()
        }, 2000)
    }
    
}

export { Error }