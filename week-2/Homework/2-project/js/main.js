let botonBlue = document.getElementById("blueBtn")
let botonOrange = document.getElementById("orangeBtn")
let botonGreen = document.getElementById("greenBtn")

botonBlue.addEventListener("click", fncBtnBlue)
botonOrange.addEventListener("click", fncBtnOrange)
botonGreen.addEventListener("click", fncBtnGreen)

function fncBtnBlue() {
    document.querySelector(".jumbotron").style.backgroundColor = "#588fbd",
        document.querySelector(".btn.btn-primary.btn-lrg").style.backgroundColor = "#ffa500"
    document.querySelector(".btn-secondary").style.backgroundColor = "black"
    document.querySelector(".btn-secondary").style.color = "white"
}

function fncBtnOrange() {
    document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e",
        document.querySelector(".btn.btn-primary.btn-lrg").style.backgroundColor = "#5751fd"
    document.querySelector(".btn-secondary").style.backgroundColor = "#31b0d5"
    document.querySelector(".btn-secondary").style.color = "white"
}

function fncBtnGreen() {
    document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a",
        document.querySelector(".btn.btn-primary.btn-lrg").style.backgroundColor = "black"
    document.querySelector(".btn-secondary").style.backgroundColor = "#8c9c08"

}


let email = document.getElementById("exampleInputEmail1")
let names = document.getElementById("example-text-input")
let yourself = document.getElementById("exampleTextarea")
let summit = document.getElementById("submitID")
let formulario = document.getElementById('formulario')
summit.addEventListener("click", validar)


function validar(event) {
    event.preventDefault()

    if (email.value.length > 0 && email.value.includes("@") &&
        names.value.length > 0 &&
        yourself.value.length > 0
    ) {
        names.style.backgroundColor = "white"
        yourself.style.backgroundColor = "white"
        email.style.backgroundColor = "white"
        alert("thank you for completing the form")
        return formulario.reset()
    } 
    
    else if (
        email.value.length === 0) {
        return email.style.backgroundColor = "red",
            alert("fill in the fields")
    }
    
    else if (names.value.length === 0) {
        return names.style.backgroundColor = "red",
            alert("fill in the fields")
    }
    
    else if (yourself.value.length === 0) {
        return yourself.style.backgroundColor = "red",
            alert("fill in the fields")
    }

}


















