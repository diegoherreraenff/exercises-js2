// Write your code here
let coleccionImagenes = [
    "./imagen/capilla-sixtina.jpg",
    "./imagen/hotbook-67.jpg",
    "./imagen/joker.jpg",
    "./imagen/la-piedad.jpg",
    "./imagen/noche estrellada.jpg"
]
let index = 0
const forward = document.getElementById("forward");
const stopbutton = document.getElementById("stopbutton");
const start = document.getElementById("start");
const back = document.getElementById("back");
const starBack = document.getElementById("starBack");
let imagen = document.getElementById("imagenes")
imagen.src = coleccionImagenes[0]
let interval = -1 

function iteracion() {
    index = (index + 1) % coleccionImagenes.length 
    /* index ++
    if (index === coleccionImagenes.length) {
        index = 0
    } */
    imagen.src = coleccionImagenes[index]
}

function backIteracion() {
    index--
    if (index < 0) {
        index = coleccionImagenes.length - 1
    }
    imagen.src = coleccionImagenes[index]
}


forward.addEventListener("click", () => {
    iteracion()
});

back.addEventListener("click", () => {
    backIteracion()
});

start.addEventListener("click", () => {
    clearInterval (interval)
   interval = setInterval(iteracion, 1000)
});

starBack.addEventListener("click", () => {
    clearInterval (interval)
    interval = setInterval(backIteracion, 1000)
});
console.log (interval)
stopbutton.addEventListener("click", () => {
    clearInterval(interval)
    //clearInterval()
    console.log(interval)
})









