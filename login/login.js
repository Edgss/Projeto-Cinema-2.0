//Visualizar senha

let senha = document.getElementById("senha")
let icone = document.getElementById("icone")

icone.addEventListener("click", verSenha)

function verSenha(){
    const type = senha.type === "password" ? "text" : "password"
    senha.type = type
    icone.classList.toggle("bi-eye-fill")
    icone.classList.toggle("bi-eye-slash")
}


//Modo Claro
let trilho = document.getElementById("trilho")
let banner = document.getElementById("banner")
let fundo = document.getElementById("fundo")
const body = document.querySelector("body")


trilho.addEventListener("click", ()=>{
    trilho.classList.toggle("dark")
    body.classList.toggle("dark")
    

    if(banner.src.includes("users.png")){
        banner.src = "../imgs/users-white.png"
        body.style.backgroundImage = "url(../imgs/backgroundWhite2.png"
    }
    else{
        banner.src = "../imgs/users.png"
        body.style.backgroundImage = "url(../imgs/background.png)"
    }


})
