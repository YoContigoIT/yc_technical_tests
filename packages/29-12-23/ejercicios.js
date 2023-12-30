// No cambies el nombre de las funciones
function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  let aux = nombre[0].toUpperCase() 
  aux += nombre.substring(1);

  return aux;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let aux = 0;
  numeros.forEach(element => {
    aux += element;
  });
  cb(aux)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(element => {
    cb(element)
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  return array.map((ele) => cb(ele));
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  // ['abajo', 'pera', 'escalera', 'alerta', 'indice', 'azteca', 'arbol', 'buzo']
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  return array.filter((ele) => ele[0].includes("a"))
}

/*
    1.- Implementa una función llamada listaDeTareas que no tome ningún argumento. Esta función deberá devolver un objeto con tres métodos:
      * agregarTarea(tarea): Agrega una nueva tarea a la lista. Cada tarea debe ser un objeto con una propiedad tarea que almacena la descripción de la tarea y una propiedad completada que es un valor booleano inicializado en false.

      *marcarComoCompletada(indice): Marca la tarea en la posición indicada por indice como completada. Si el índice está fuera del rango válido, no realiza ninguna acción.
    
      *obtenerTareasPendientes(): Devuelve un array que contiene las tareas que aún no han sido marcadas como completadas.

    2.- Utiliza clausuras para mantener un estado interno de la lista de tareas que no sea accesible desde fuera de la función listaDeTareas.

    3.- Implementa pruebas unitarias utilizando el framework Jest para verificar el correcto funcionamiento de cada método de la lista de tareas. Asegúrate de cubrir casos donde se agregan tareas, se marcan como completadas y se obtiene la lista de tareas pendientes.

*/

function listaDeTareas() {
  const tareas = [];

  return {
    agregarTarea(tarea) {
      const nuevaTarea = {
        descripcion: tarea,
        completada: false
      };
      tareas.push(nuevaTarea);
    },
    marcarComoCompletada(indice) {
      if (indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
      }
    },
    obtenerTareasPendientes() {
      return tareas.filter(tarea => !tarea.completada);
    }
  };
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter,
};
