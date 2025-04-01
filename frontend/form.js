function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    emailjs.send("ContactAI","template_6xf457o",parms).then(alert("Email Enviado!!!"))
}