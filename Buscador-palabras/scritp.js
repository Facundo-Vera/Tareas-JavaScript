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
let mensajeAlert = document.querySelector("#mensaje_alert") 
mensajeAlert.classList.add("d-none");


function buscarPalabra() {
  let palabraBuscada = palabra.value.toLowerCase().trim();
  let textoIngresado = texto.value.toLowerCase();

  if (textoIngresado.includes(palabraBuscada) && palabraBuscada !== "") {
    crearMensaje("success", "<b>¡Palabra encontrada!</b>");
  } else {
    crearMensaje("danger", "<b>Palabra no encontrada</b>");
  }
}

function limpiarInput() {
  palabra.value = "";
limpiarMensaje()
}
function limpiarMensaje(){
    mensajeAlert.classList.add("d-none");
  mensajeAlert.classList.remove("alert-danger", "alert-success");
}
function crearMensaje(tipo, texto) {
  mensajeAlert.classList.remove("d-none", "alert-danger", "alert-success");
  mensajeAlert.classList.add(`alert-${tipo}`);
  mensajeAlert.innerHTML = texto;
}