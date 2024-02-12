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


function caracteresMasFrecuentes(cadena) {
  const arrayCadena = cadena.toLowerCase().split('');
  const arrayWithNumbers = [];
  arrayCadena.forEach((elem) => {
    arrayWithNumbers.push(compareChart(elem, arrayCadena));
  });

  sortArray(arrayWithNumbers);
}

function compareChart(chart, array) {
  let sum = 0;
  array.map((e) => {
    if (e == chart)
      sum += 1;
  })
  return { chart: chart, sum: sum }
}

function sortArray(array) {
  array.sort(function (a, b) {
    if (a.sum < b.sum) {
      return 1;
    }
    if (a.sum > b.sum) {
      return -1;
    }
    return 0;
  });
  extractCoincidences(array);
}

function extractCoincidences(array) {
  arrayAux = [];
  arrayComplete = []
  array.forEach((e) => {
    if (array[0].sum == e.sum) {
      arrayAux.push(e.chart);
    }
  });
  arrayAux.forEach((item) => {
    if (!arrayComplete.includes(item)) {
      arrayComplete.push(item);
    }
  });

  //---------RESPUESTA FINAL----------
  console.log(arrayComplete.join(''));
  return arrayComplete.join('');
}

module.exports = {
  sumaDeRango,
  caracteresMasFrecuentes
}

caracteresMasFrecuentes('pprogramming');