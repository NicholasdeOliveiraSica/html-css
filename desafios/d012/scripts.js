
// document - vai no HTML
// querySelector - busca algo

let form = document.querySelector("#form")
let titulo = document.querySelector("header>h1")

function aparecerForm(){
    form.style.left = "50%"
}

function desaparecerForm(){
    form.style.left = "-50%"
}

    titulo.style.opacity = "100%"