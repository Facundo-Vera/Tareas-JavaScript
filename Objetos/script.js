// *🟢 EJERCICIOS BÁSICOS (Objetos simples)
// TODO 1. Crear un objeto llamado auto con las siguientes propiedades:
// marca
// modelo
// color
// año
// encendido (boolean)
// Y un método encender() que cambie el valor de encendido a true y muestre un mensaje en consola.

const auto = {
  marca: "BMW",
  modelo: "BMW M4 Competition",
  color: "Nardo Grey",
  anio: 2014,
  encendido: false,
  encender() {
    this.encendido = true;
    console.log(this.encendido);
  },
};

auto.encender();
console.log(auto);

// TODO 2. Crear un objeto persona con propiedades:
// nombre
// apellido
// edad
// dirección (otro objeto con calle, ciudad, número)
// Luego:
// Mostrá la ciudad en consola.
// Cambiá la edad por otra.
// Agregá una propiedad profesión.
// Eliminá la propiedad apellido.

const persona = {
  nombre: "Facundo",
  apellido: "Vera",
  edad: 19,
  dirección: {
    calle: "Vinewood Boulevard",
    ciudad: "Los Santos",
    Number: 1234,
  },
};


console.log(persona.dirección.ciudad);
persona.edad = 35;
console.log(persona.edad);
persona.profecion ="Programador"
delete persona.edad;
console.log(persona)