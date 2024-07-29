
const form = document.querySelector(".form")
const mask = document.querySelector(".focusMask")
const botaoMenu = document.querySelector(".menu")
const menu = document.querySelector(".menu-grande")


function abreForm() {
    form.style.left = "50%"   
    mask.style.display = "block"
}

function fechaForm() {
    form.style.left = "-50%"
    mask.style.display = "none"
}

function menuAbre() {
    mask.style.display = "block"
    botaoMenu.style.display = "none"
    menu.style.right = "0"
}

function menuFecha() {
    mask.style.display = "none"
    botaoMenu.style.display = "block"
    menu.style.right = "-250px"
}