let inputNumero = document.getElementById("display")
let numeros = document.querySelectorAll(".btn")
let btnLimpiar = document.querySelector(".clear")
btnLimpiar.addEventListener("click",limpiarInput)

function mostrarNumeros(){
    //necesito saber que boton fue presionado y asignarle ese valor a inputNumero

}
// le agrega a cada boton el eventlister
const click = numeros
click.forEach((numero)=> numero.addEventListener("click",mostrarNumeros))

function limpiarInput (){
    inputNumero.value = "";
}

