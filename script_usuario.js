const usuarios = JSON.parse(localStorage.getItem("usuarios"))
const tabela = document.getElementById("tabela-usuarios")

for (let index = 0; index < usuarios.length; index++) {
    const usuario = usuarios[index];

    const linha = `
        <tr>
            <td>${usuario.id}</td>
            <td>${usuario.email}</td>
            <td>${usuario.senha}</td>
        </tr>
    `

    tabela.innerHTML += linha

}