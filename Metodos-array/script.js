//&Metodos de los array
// ^📌 Consignas:
// Usa forEach para imprimir cada tarea junto con su estado.
// Ejemplo de salida:
// 0: Lavar los platos - completada
// 1: Estudiar JavaScript - pendiente
// Usa filter + map para obtener un nuevo array con solo los nombres de las tareas completadas.
// Resultado esperado: ["Lavar los platos", "Sacar la basura"]
// Usa some para saber si hay alguna tarea sin completar.
// Resultado esperado: true
// Usa every para saber si todas las tareas están completas.
// Resultado esperado: false

const tareas = ["Lavar los platos", "Estudiar JavaScript", "Sacar la basura", "Hacer ejercicios"];
const completadas = [true, false, true, false];


tareas.forEach((tarea,index) =>{
    const estaCompletada = completadas[index];
    if(estaCompletada == true){
        console.log(`${tarea} - tarea completada `)
    }else{
        console.log(`${tarea} - pendiente`)
    }
})
const tareasCompletadas = tareas.filter((tarea, index) => {
  return completadas[index] === true;
});
console.log(tareasCompletadas)

const hayPendientes = completadas.some((estado) => estado === false);
console.log(hayPendientes);

const todasCompletadas = completadas.every((estado) => estado === false);
console.log(todasCompletadas);