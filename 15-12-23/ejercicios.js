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
*/



/*

1- guardarla en un array dividido con split 
2- iterar el array 
3- comparar si son iguales y los que si guardarlos en una variable
4- retornar la que tenga length mayor 

*/
function caracteresMasFrecuentes(cadena) {
  //Tu código aquí
  let letraADevolver = ''
  let nuevaCuenta, contadorDeLetraQueMasSeRepit= 0
  for (let i = 0; i < cadena.length; i++) {
    cont = 0
    for (let j = 1; j < cadena.length; j++) {
      if(cadena[i] == cadena[j]){
        nuevaCuenta++
        if (nuevaCuenta > contadorDeLetraQueMasSeRepit) {
          letraADevolver = cadena[i]
          contadorDeLetraQueMasSeRepit = nuevaCuenta
        }
      }
    }
  }
  return letra

}

console.log(caracteresMasFrecuentes('cadena'))

module.exports = {
  sumaDeRango,
  caracteresMasFrecuentes
}