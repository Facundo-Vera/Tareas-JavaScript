// !Crea un programa de quiz interactivo con varias preguntas de cultura general.
// El usuario tendrá 3 intentos por cada pregunta para responder correctamente.
// *Si acierta, el programa muestra un mensaje de felicitación y pasa a la siguiente pregunta.
// *Si falla, se le descuenta un intento y se le da una pista dinámica 
// *(por ejemplo: “Empieza con la letra A”, “Es un país de Europa”, etc.).
// *Si gasta los 3 intentos sin acertar, el programa muestra la respuesta correcta y continúa con la siguiente pregunta.
// Al final del juego, el programa muestra un mensaje con el puntaje final 
// (cantidad de respuestas correctas sobre el total de preguntas).

//!ALgoritmo 
//Datos:pregunta,respuesta del usuario,respuesta correcta,cantidad de intentos
//Proceso: el usuario responde , se evalua si es correcta la respuesta.
//Final:  el programa muestra un mensaje con el puntaje final

let pregunta1 = "¿Cuál es el único mamífero capaz de volar?";
let respuestaDelUsuario = "";
let cantidadDeIntentos = 3;
let respuestaCorrecta1 = "Murcielago";
let pista = "Empieza con M"
let ganasteJuego = false;

do {
    //*primero pido la respuesta al usuario 
  respuestaDelUsuario = prompt(
    pregunta1 + " tenés " + cantidadDeIntentos + " de intentos"
    
  );
 //*evaual si repuesta coincide con respuesta correcta
  if (respuestaDelUsuario.toLowerCase() === respuestaCorrecta1.toLowerCase()) {
    console.log("CORRECTO 🎉 ");

    cantidadDeIntentos = 0;
    puntaje ++;
   
  }else if(respuestaDelUsuario.toLowerCase() != respuestaCorrecta1.toLowerCase()){
    console.log(`Pista ${pista}`)
  }
  cantidadDeIntentos--; 
} while (cantidadDeIntentos > 0);

if (cantidadDeIntentos === 0) {
  console.log("PERDISTE!!😭");
}

