
// - El array muestra el orden en que se arrancó la carrera y los puestos de cada piloto.
//-Antes de la carrera se muestra la tabla en orden alfabético con los pilotos. No se debe modificar el array original. 
//- Mostrar que pilotos vienen en el 3er y 5to puesto.
//- se sumaron tres pilotos más al final "Pierre Gasly","Valtteri Bottas","Lance Stroll"
//- "Lewis Hamilton" avanzó al primer puesto
//- Russel pasó al 6to puesto
// - "Carlos Sainz" tuvo desperfectos con el vehículo y salió de la carrera.
// - Alonso avanzó rápidamente al 2do puesto dejando fuera de la carrera al piloto que estaba en ese puesto.
// - Perez se retrasó en Boxes y quedó en último lugar.
// - La carrera terminó y se muestra un mensaje con la lista de los pilotos que quedaron en el podio (los 3 primeros puestos)


const pilotosF1 = [
  "Max Verstappen",
  "Sergio Pérez",
  "Lewis Hamilton",
  "George Russell",
  "Charles Leclerc",
  "Carlos Sainz",
  "Lando Norris",
  "Oscar Piastri",
  "Fernando Alonso",
  "Esteban Ocon"
];

for(let i = 0 ;i < pilotosF1.length ; i++){
    console.log(`${i + 1} - ${pilotosF1[i]}`);
}

let pilotosOrdenados =[...pilotosF1].sort()
let pilotosCopia = pilotosF1.slice()

console.log(`Pilotos en orden alfabético 🧑`)
for(let i = 0 ; i < pilotosOrdenados.length ;i++){
    console.log(`${i + 1} - ${pilotosOrdenados[i]}`)
}

console.log(`Pilotos en 3er y 5to puesto!!! 🏎🏁`)
console.log(pilotosCopia[2])
console.log(pilotosCopia[4])

console.log(`Se suman tres pilotos 😮`)
pilotosCopia.push("Pierre Gasly","Valtteri Bottas","Lance Stroll")
for (let i = 0 ; i < pilotosCopia.length;i++){
     console.log(`${i + 1} - ${pilotosCopia[i]}`);
}

pilotosCopia.splice(2,1)
pilotosCopia.unshift(  "Lewis Hamilton")
console.log( "Lewis Hamilton avanzó al primer puesto 🎉 ")
for (let i = 0 ; i < pilotosCopia.length;i++){
     console.log(`${i + 1} - ${pilotosCopia[i]}`);
}

console.log("Russel pasó al 6to puesto")
pilotosCopia.splice(3,1,"Charles Leclerc")
pilotosCopia.splice(4,1,"Carlos Sainz")
pilotosCopia.splice(5,1, "George Russell")
for (let i = 0 ; i < pilotosCopia.length;i++){
     console.log(`${i + 1} - ${pilotosCopia[i]}`);
}


pilotosCopia.splice(4,1)
console.log("Carlos Sainz tuvo desperfectos con el vehículo y salió de la carrera 😥")
for (let i = 0 ; i < pilotosCopia.length;i++){
     console.log(`${i + 1} - ${pilotosCopia[i]}`);
}
pilotosCopia.splice(1,1)
pilotosCopia.splice(8,1)
pilotosCopia.splice(1,1 ,"Fernando Alonso")
console.log("Alonso avanzó rápidamente al 2do puesto dejando fuera de la carrera al piloto que estaba en ese puesto. 🏁")
for (let i = 0 ; i < pilotosCopia.length;i++){
     console.log(`${i + 1} - ${pilotosCopia[i]}`);
}
pilotosCopia.splice(1,1)
pilotosCopia.push("Sergio Pérez")
console.log("Perez se retrasó en Boxes y quedó en último lugar. 😣")
for (let i = 0 ; i < pilotosCopia.length;i++){
     console.log(`${i + 1} - ${pilotosCopia[i]}`);
}

let podioPilotos = pilotosCopia.slice(0,3)
console.log(`Pilotos que quedaron el el PODIO!!! 🎉🏁🏎 `)
console.log("Perez se retrasó en Boxes y quedó en último lugar. 😣")
for (let i = 0 ; i < podioPilotos.length;i++){
     console.log(`${i + 1} - ${podioPilotos[i]}`);
}

