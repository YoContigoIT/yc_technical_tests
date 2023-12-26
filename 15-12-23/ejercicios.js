/*
3.- Suma de un Rango de Números:
Calcule la suma de todos los números enteros en un rango dado, incluyendo ambos extremos. La función debe tomar dos números enteros como parámetros y devolver la suma de todos los números enteros (positivos o negativos) entre ellos, incluso si los parámetros están en orden descendente.
*/
function sumaDeRango(numInicio, numFinal) {
  let suma = 0;
  for (let i = numInicio; i <= numFinal; i++) {
    suma += i;
  }
  return suma;
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
function caracteresMasFrecuentes(cadena) {
  let cont, aux = 0;
  let char = ''
  for (let i = 0; i < cadena.length; i++) {
    cont = 0;
    for (let j = i + 1; j < cadena.length-1; j++) {
      if (cadena[i] === cadena[j]) {
        cont++;
        if (cont > aux) {
          aux = cont;
          letra = cadena[i];
        }
      }
    }
    
    // listaContadores.push({char: cadena[i], cant: cont})
  }
  return letra;
}

module.exports = { 
  sumaDeRango,
  caracteresMasFrecuentes
}