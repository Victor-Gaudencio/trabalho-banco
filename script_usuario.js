const usuarios = JSON.parse(localStorage.getItem("usuarios"))
const tabela = document.getElementById("tabela-usuarios")

if (!usuarios) {
    localStorage.setItem("usuarios", JSON.stringify([]))
    location.reload()
}

for (let index = 0; index < usuarios.length; index++) {
    const usuario = usuarios[index];

    const linha = `
        <tr>
            <td>${usuario.id}</td>
            <td>${usuario.email}</td>
            <td>${usuario.senha}</td>
            <td>
                <div class="btn btn-sm btn-warning">Editar</div>
                <div class="btn btn-sm btn-danger" onclick="apagarUsuario(${usuario.id})">Excluir</div>
            </td>
        </tr>
    `
    tabela.innerHTML += linha
}

function apagarUsuario(id) {
    const usuarioEncontrado = usuarios.find((usuario) => {
        return usuario.id == id
    })
    usuarios.splice(usuarios.indexOf(usuarioEncontrado), 1)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    location.reload()
}

const formularioCadastro = document.getElementById("formulario_modal")
formularioCadastro.addEventListener("submit", (event) =>{
    event.preventDefault()
    const ultimoUsuario = usuarios[usuarios.length - 1]
    const usuarioNovo = {
        id: (ultimoUsuario?.id || 0) + 1,
        email: document.getElementById("email_usuario").value,
        senha: document.getElementById("senha_usuario").value
    }

    usuarios.push(usuarioNovo)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    location.reload()
})

