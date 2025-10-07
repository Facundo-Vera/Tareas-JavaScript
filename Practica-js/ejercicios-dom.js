//! Ejercicios DOM

// &Cambiar texto:
//*Crea un botón que, al hacer clic, cambie el texto de un <p> con innerText.

function cambiarTexto() {
  let texto = document.getElementById("texto");
  texto.innerText = "Hola, soy el nuevo texto!!";
}


function cambiarColor(){
  let tarjeta = document.querySelector(".card")
  tarjeta.style.backgroundColor = "blueviolet";
}

let boton = document.getElementById("btnCambiar");
boton.addEventListener("click", cambiarTexto);

let botonColor = document.getElementById("btnCambiarColor")
botonColor.addEventListener("click",cambiarColor)

//&Cambiar color:
//*Al hacer clic en un botón, cambia el color de fondo de un <div>.