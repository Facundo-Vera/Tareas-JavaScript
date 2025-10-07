// funcion de busqueda
//classList para ver las clases del elemento
//quitar clase classList.remove("nombre de la clase")
//agregar clas classList.add("nombre de la clase ")

//!ALGORITMO
//datos: ingresar un texo y palabra
//proceso: obtener datos del textarea (texto) e input (palabra),crear una funcion que busque si la palabra ingresada esta en el texto
//final: si la palabra esta mostrar el alert verde, si no esta mostrar el alert rojo (los alert deben estar ocultos antes de que la funcion valide)

let palabra = document.getElementById("palabra");
let texto = document.getElementById("texto");
let mensajeCorrecto = document.getElementById("mensaje_correcto");
let mensajeIncorrecto = document.getElementById("mensaje_error");
mensajeCorrecto.classList.add("d-none");
mensajeIncorrecto.classList.add("d-none");
mensajeCorrecto.innerText("Palabra encontrada!!");

function buscarPalabra() {

  let palabraBuscada = palabra.value.toLowerCase();
  let textoIngresado = texto.value.toLowerCase();

  if (textoIngresado.includes(palabraBuscada)) {
    mensajeCorrecto.classList.remove("d-none");
    mensajeCorrecto.innerText = "Palabra encontrada";
    
  } else {
    mensajeIncorrecto.classList.remove("d-none");
    mensajeIncorrecto.innerText ="Palabra no  encontrada";
  }
}

function limpiarInput() {
  palabra.value = "";
}
