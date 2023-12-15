/*
3.- Suma de un Rango de Números:
Calcule la suma de todos los números enteros en un rango dado, incluyendo ambos extremos. La función debe tomar dos números enteros como parámetros y devolver la suma de todos los números enteros (positivos o negativos) entre ellos, incluso si los parámetros están en orden descendente.
*/

function sumaDeRango(numInicio, numFinal) {
  // Tu código aquí
}

/*
  * 4.- Encontrar el Carácter Más Frecuente:
  Desarrolla una función en JavaScript que, dada una cadena de texto, identifique y devuelva el primer carácter que aparece con mayor frecuencia. La función debe considerar todos los caracteres y no distinguir entre mayúsculas y minúsculas. En caso de que varios caracteres tengan la misma frecuencia máxima, la función deberá retornar un string que contenga únicamente el primer carácter encontrado.

  * EXTRA OPCIONAL: En caso de que varios caracteres tengan la misma frecuencia máxima, la función deberá retornar un array con todos estos caracteres.
  
  Consideraciones:
  - La función debe recibir una cadena de texto como parámetro.
  - Debe considerar todos los caracteres, sin distinción entre mayúsculas y minúsculas.
  - Identificar el carácter que aparece con mayor frecuencia en la cadena.
  - En caso de que varios caracteres tengan la misma frecuencia máxima, la función debe retornar solo el primer carácter encontrado.
  - La función debe retornar un string que contenga únicamente el carácter identificado.
  - Se espera que el código sea claro, legible y eficiente en cuanto a rendimiento.
  - Considerar casos límite y manejar posibles errores o situaciones inesperadas de manera apropiada.


  -primero convertir todos las letras recibidas a minusculas
  -sacar cada una de las letras que contiene la cadena de texto
  -comparar esas letras para ver cual es la que tiene mayo numero de concidencias


*/

function caracteresMasFrecuentes(cadena) {
  //Tu código aquí

  let cadenaMin = cadena.toLowerCase();
  let cadenaAux = [];
  let letrarepetida = "";
  let letra = 0;
  let cont = 1;
  for (let i = 0; i < cadenaMin.length; i++) {
    let cont = 0;
    for (let j = 1; j < cadenaMin.length; j++) {
      if (cadenaMin[i] == cadenaMin[j]) {
        cont++;
        cadenaAux += cont;
        console.log(cadenaAux);
        if (letra < cadenaAux) {
          letra = cadenaAux;
          letrarepetida = cadenaMin[j];
        }
      }
    }
  }
  console.log(letrarepetida);
}

caracteresMasFrecuentes("hoalaaa");

module.exports = {
  sumaDeRango,
  caracteresMasFrecuentes,
};
