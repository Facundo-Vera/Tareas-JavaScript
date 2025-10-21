let cuerpoTabla = document.querySelector("tbody");
let inputNombre = document.querySelector("#name");
let inputAutor = document.querySelector("#game");
let inputAnio = document.querySelector("#port");
let inputDescripcion = document.querySelector("#description");
let formulario = document.getElementById("bookServer");

let update = false;
let idUpdate = null;
const listaServidores = [
  {
    id: 1,
    nombre: "Hypixel",
    juego: "Minecraft",
    puerto: 25565,
    descripcion:
      "Uno de los servidores más populares de Minecraft, conocido por sus minijuegos como SkyWars y BedWars.",
  },
  {
    id: 2,
    nombre: "Faceit CS:GO",
    juego: "CS:GO",
    puerto: 27015,
    descripcion:
      "Servidor competitivo con emparejamientos por ELO y torneos regulares para jugadores avanzados.",
  },
  {
    id: 3,
    nombre: "FiveM RP España",
    juego: "GTA V (RP)",
    puerto: 30120,
    descripcion:
      "Servidor roleplay español de GTA V con economía realista, trabajos y una comunidad activa.",
  },
  {
    id: 4,
    nombre: "VALORANT LATAM1",
    juego: "VALORANT",
    puerto: 7777,
    descripcion:
      "Servidor regional de Riot para partidas competitivas y eventos de temporada en Latinoamérica.",
  },
  {
    id: 5,
    nombre: "Rustoria EU Main",
    juego: "Rust",
    puerto: 28015,
    descripcion:
      "Servidor PvP de Rust con wipes semanales y reglas estrictas para una experiencia intensa.",
  },
];
getServidores();
function getServidores(array = listaServidores) {
  cuerpoTabla.innerHTML = "";

  array.forEach((servidor) => {
    let fila = document.createElement("tr");

    let celdas = `
        <td>${servidor.nombre}</td>
        <td>${servidor.juego}</td>
        <td>${servidor.puerto}</td>
        <td>
            <button class="btn btn-danger btn-sm" onclick="borrarServidor(${servidor.id})">
            <i class="bi bi-x-lg"></i>
            </button>
            <button class="btn btn-warning btn-sm" onclick="cargarDatos(${servidor.id})">
            <i class="bi bi-pencil-square"></i>
            </button>
        </td>
        `;

    fila.innerHTML = celdas;
    cuerpoTabla.append(fila);
  });
}

const agregarServidor = () => {
  let id = listaServidores.at(-1).id + 1;

  const datos = {
    //le asigno lo que ingreso en el input a las propiedades del objeto litastaServidores
    id,
    nombre: inputNombre.value,
    juego: inputAutor.value,
    puerto: inputAnio.value,
    descripcion: inputDescripcion.value,
  };

  listaServidores.push(datos);
  getServidores();
};

//TODO borrar servidor
function borrarServidor(id) {
  // splice -> indice , 1
  let index = listaServidores.findIndex((server) => server.id === id); //posicion

  let validar = confirm(
    `Está seguro que quiere eliminar el servidor  ${listaServidores[index].nombre}?`
  );

  if (validar) {
    listaServidores.splice(index, 1);
    getServidores(); // refresca la tabla y la carga basandose en enl array
    //!cada vez que modifiquemos el array original debemos recargra la tabla
  }
}

//TODO buscador
function buscadorServidor(
  termino = document.querySelector("#input-search").value
) {
  if (termino) {
    let servidoresFiltrados = listaServidores.filter((servidor) =>
      servidor.nombre.toLowerCase().includes(termino.toLowerCase())
    );
    getServidores(servidoresFiltrados);
  } else {
    getServidores();
  }
}

//TODO limpiar buscador
const inputBuscador = document.querySelector("#input-search");

inputBuscador.addEventListener("focus", () => {
  inputBuscador.value = ""; // Borra el texto del buscador
  getServidores(); // Muestra la lista original
});
//TODO cargar datos
function cargarDatos(id) {
  update = true;
  let datos = listaServidores.find((servidor) => servidor.id === id);

  inputNombre.value = datos.nombre;
  inputAutor.value = datos.juego;
  inputAnio.value = datos.puerto;
  inputDescripcion.value = datos.descripcion;

  idUpdate = id;
  document.querySelector(".btn-primary").innerText = "Actualizar servidor";
}
function actualizaServidor(id, valores) {
    let index = listaServidores.findIndex((server) => server.id === id);

    listaServidores[index].nombre = valores.nombre;
    listaServidores[index].juego = valores.juego;       
    listaServidores[index].puerto = valores.puerto;     
    listaServidores[index].descripcion = valores.descripcion;

    update = false;
    document.querySelector(".btn-primary").innerText = "Agregar servidor";
    getServidores(); 
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!update) {
    agregarServidor();
  } else {
    let valores = {
      nombre: inputNombre.value,
      juego: inputAutor.value,       //
      puerto: inputAnio.value,       
      descripcion: inputDescripcion.value,
    };
    actualizaServidor(idUpdate, valores);
  }

  formulario.reset();
  inputNombre.focus();
});