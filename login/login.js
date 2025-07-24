let senha = document.getElementById("senha")
let icone = document.getElementById("icone")

icone.addEventListener("click", verSenha)

function verSenha(){
    const type = senha.type === "password" ? "text" : "password"
    senha.type = type
    icone.classList.toggle("bi-eye-fill")
    icone.classList.toggle("bi-eye-slash")
}