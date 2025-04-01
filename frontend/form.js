function sendMail() {
    // Obtener referencias a los campos
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");
    
    // Validar campos
    if (!nameField.value || !emailField.value || !messageField.value) {
        alert("Por favor complete todos los campos obligatorios");
        return;
    }

    // Preparar parámetros
    let parms = {
        name: nameField.value,
        email: emailField.value,
        message: messageField.value
    };

    // Enviar email y limpiar campos después
    emailjs.send("ContactAI", "template_6xf457o", parms)
        .then(() => {
            alert("Email Enviado!!!");
            // Limpiar los campos
            nameField.value = "";
            emailField.value = "";
            messageField.value = "";
        })
        .catch(error => {
            console.error("Error al enviar:", error);
            alert("Ocurrió un error al enviar el mensaje");
        });
}