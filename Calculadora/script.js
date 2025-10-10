let inputNumero = document.getElementById("display")
let numeros = document.querySelectorAll(".btn")
let btnLimpiar = document.querySelector(".clear")
btnLimpiar.addEventListener("click",limpiarInput)

//* Cuando hago click el navegador genera un objeto de evento que trae informacion del click y se lo pasa como parametro a la funcion
//*y yo extraigo el valor que me trae ese objeto en este caso un numero
function mostrarNumeros(evento) {
  // boton.target representa el botón que fue presionado
  let valor = evento.target.textContent;  
  // se agrega el valor al input
  inputNumero.value += valor; 
}
// le agrega a cada boton el eventlister
const click = numeros
click.forEach((numero)=> numero.addEventListener("click",mostrarNumeros))

function limpiarInput (){
    inputNumero.value = "";
}

//!PROBLEMA:la funcion no sabe que boton fue presionado 
//&Probando maneras de resolver el ejercicio (por mas que  no sean las mas efectivas :) 

//^Tendria que hacer una funcion por cada numero por lo tanto no searia lo mas conveniente

// let inputNumero = document.getElementById("display");
// let num1 = document.getElementById("num-1");
// num1.addEventListener("click",mostrarNumero1)
// let num2 = document.getElementById("num-2");
// num2.addEventListener("click",mostrarNumero2)
// let btnLimpiar = document.querySelector(".clear");
// btnLimpiar.addEventListener("click", limpiarInput);

// function mostrarNumero1() {
//   inputNumero.value = num1.value;

// }
// function mostrarNumero2(){
//       inputNumero.value = num2.value;
// }

// function limpiarInput() {
//   inputNumero.value = "";
// }
