const email = "test@test.com"
const senha = "12345678"
localStorage.setItem("email", "senha")

const emailinput = document.getElementById("email")
const senhainput = document.getElementById("senha")
const formulario = document.getElementById("formulario_login")




formulario.addEventListener("submit"), (event) =>{    
    event.preventDefault()
    const emaildigitado = emailinput.value
    const senhadigitado = senhainput.value
    console.log(emailinput.value)
    console.log(senhainput.value)

})





function login() {
    const email = emailInput.value
    const senha = senhaInput.value
    if (localStorage.getItem(email) === senha){}

}