const trilho = document.getElementById("trilho")
const body = document.querySelector("body")
let banner = document.getElementById("banner")


trilho.addEventListener("click", ()=>{
    trilho.classList.toggle("dark")
    body.classList.toggle("dark")

    if(banner.src.includes("cadastro.png")){
        banner.src = "imgs/cadastroWhite.png"
        body.style.backgroundImage = "url(imgs/backgroundWhite2.png"
    }
    else{
        banner.src = "imgs/cadastro.png"
        body.style.backgroundImage = "url(imgs/background.png)"
    }


})


