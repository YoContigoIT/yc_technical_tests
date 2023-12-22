'use strict';

// Closures

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */
function counter() {
  let currentCounter = 0;
  return () => {
    currentCounter++
    return currentCounter;
  }
}

/* const firstCounter = counter();
const secondCounter = counter();

console.log('firstCounter: ', firstCounter());
console.log('firstCounter: ', firstCounter());
console.log('secondCounter: ', secondCounter());
console.log('secondCounter: ', secondCounter());
console.log('secondCounter: ', secondCounter());
console.log('secondCounter: ', secondCounter());
console.log('firstCounter: ', firstCounter());
 */
/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

const squareFromNumber = (number) => ( number * number );

function cacheFunction(callback) {

  let cache = {}

  return (value) => {
    if(cache.hasOwnProperty(value)){
      console.log('from cache: ');
      return cache[value];
    } else {
      console.log('calculating: ');
      let result = callback(value);
      cache[value] = result;
      return result;
    }
  }

}

let newSquareCache = cacheFunction(squareFromNumber);

console.log(newSquareCache(5)); 
console.log(newSquareCache(5));
console.log(newSquareCache(6));

//----------------------------------------

// Bind

var instructor = {
   nombre: 'Franco',
   edad: 25,
};

var alumno = {
   nombre: 'Juan',
   curso: 'FullStack',
};

function getNombre() {
  return this.nombre;
}

/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);

/* console.log(getNombreInstructor());
console.log(getNombreAlumno());
 */
/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let asteriscos = '*';
let guiones = '-';
let underscore = '_'

let textoAsteriscos = crearCadena.bind(this, asteriscos, asteriscos);
let textoGuiones = crearCadena.bind(this, guiones, guiones);
let textoUnderscore = crearCadena.bind(this, underscore, underscore);

console.log(textoAsteriscos('hola'));
console.log(textoGuiones('hola'));
console.log(textoUnderscore('hola'));

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   counter,
   cacheFunction,
   getNombreInstructor,
   getNombreAlumno,
   textoAsteriscos,
   textoGuiones,
   textoUnderscore,
};

/* 
// a simple function to add something
const add = (n) => (n + 10);
add(9);
// a simple memoized function to add something
const memoizedAdd = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  }
}
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9)); // calculated
console.log(newAdd(9)); // cached
*/