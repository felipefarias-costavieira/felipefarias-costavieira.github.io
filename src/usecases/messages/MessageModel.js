function MessageModel(message, color){

    let model = document.createElement("p")

    model.classList = 'message-model'
    model.textContent = message
    
    document.documentElement.style.setProperty("--color-message", color);

    return model
}

export { MessageModel }