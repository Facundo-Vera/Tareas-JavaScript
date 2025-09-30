//!Tomar una tarea anterior y tratar de convertirla en una funcion

//&Ejercicio integrador: Contraseña segura
function contraseñaSegura() {
  let tieneMayuscula = false;
  let tieneNumero = false;
  let contraseña = prompt("Ingrese una contraseña ");
  if (contraseña.length < 6) {
    console.log("Ingrese una contraseña de almenos 6 caracteres");
    return;
  }
  for (let i = 0; i < contraseña.length; i++) {
    caracter = contraseña[i];
    if (
      caracter === caracter.toUpperCase() &&
      caracter !== caracter.toLowerCase()
    ) {
      tieneMayuscula = true;
    }
    if (!isNaN(caracter)) {
      tieneNumero = true;
    }
  }
  if (contraseña.length > 6 && tieneMayuscula && tieneNumero) {
    console.log("Contraseña valida");
  } else if (!tieneMayuscula) {
    console.log("Contraseña inválida ❌ debe contener al meno una Mayuscula");
  } else if (!tieneNumero) {
    console.log("Contraseña inválida ❌ debe contener al meno un Numero ");
  }
}

// contraseñaSegura();

//&Crea un programa de quiz interactivo con varias preguntas de cultura general.

function quiz(Intentos,pista,pregunta1,respuestaCorrecta1) {
  let respuestaDelUsuario = "";
  let ganasteJuego = false;
  do {
    //*primero pido la respuesta al usuario
    respuestaDelUsuario = prompt(
      pregunta1 + " tenés " + Intentos + " de intentos"
    );
    //*evaual si repuesta coincide con respuesta correcta
    if (
      respuestaDelUsuario.toLowerCase() === respuestaCorrecta1.toLowerCase()
    ) {
      console.log("CORRECTO 🎉 ");

      Intentos = 0;
    } else if (
      respuestaDelUsuario.toLowerCase() != respuestaCorrecta1.toLowerCase()
    ) {
      console.log(`Pista ${pista}`);
    }
    Intentos--;
  } while (Intentos > 0);

  if (Intentos === 0) {
    console.log("PERDISTE!!😭");
  }
  return Intentos;
}
quiz(3,"Empieza con d", "¿Cuál es el mamifero acuatico mas ineligente?","Delfin");
