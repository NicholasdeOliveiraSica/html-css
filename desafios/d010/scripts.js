
var dpNot = document.getElementById('navnot')

dpNot.addEventListener('mouseenter')
dpNot.addEventListener('mouseout')
dpNot.addEventListener('click')

/*dpNot.addEventListener('mouseenter', In)
dpNota.addEventListener('mouseenter', In)
dpNot.addEventListener('mouseout', notOut)
dpNot.addEventListener('click', clicked)*/


dpNota.style.opacity = "0%"
dpNota.style.position = "absolute"

function notIn(){
    dpNota.style.borderradius = "0px 0px 15px 15px"
    dpNota.style.left = "75.45px"
    dpNota.style.top = "199px"
    dpNota.style.zindex = "3"
    dpNota.style.opacity = "100%"
    dpNota.style.background = "#063d1e"
}

function notOut(){
    dpNota.style.opacity = "0%"
    dpNota.style.zindex = "3"
    dpNota.style.background = "#063d1e"
}

function clicked(){
}
