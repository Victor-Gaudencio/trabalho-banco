const emailinputLogin = document.getElementById("email")
const senhainputLogin = document.getElementById("senha")
const formularioLogin = document.getElementById("formulario_login")


formularioLogin.addEventListener("submit", (event) => {
    event.preventDefault()
    const emaildigitado = emailinputLogin.value
    const senhadigitado = senhainputLogin.value

    const usuarios = JSON.parse(localStorage.getItem("usuarios"))
    const usuariosencontrado = usuarios.find((usuario) => {
        return (
            usuario.email == emaildigitado &&
            usuario.senha == senhadigitado

        )

    })

    if (usuariosencontrado) {
        Swal.fire({
            title: "tu tem o molhoo",
            text: "entra fiaoo",
            timer: 1500,
            showConfirmButton: false,
            icon: "success"

        });
    } else {
        Swal.fire({
            title: "Raposo nao pegue",
            text: "RAPOSO NAO PEGUE",
            timer: 1500,
            showConfirmButton: false,
            icon: "error"
        })
    }
})






function login() {
    const email = emailInput.value
    const senha = senhaInput.value
    if (localStorage.getItem(email) === senha) { }

}


