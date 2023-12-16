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

  const objeto = {};
  let contador;
  let cadedena2 = cadena.toLowerCase().split('');

  for (let i = 0; i < cadedena2.length; i++) {
    contador = 0;

    for (let j = 0; j < cadedena2.length; j++) {
      if (cadedena2[i] == cadedena2[j]) {
        let char = cadedena2[i]
        contador++;
        objeto[char] = contador
      }
    }

  }
  const newArray = Object.entries(objeto);
  newArray.sort((a, b) => b[1] - a[1])

  return newArray[0][0];



  // Oto's code
  /* let cadena2 = cadena.toLowerCase();
  cadena2 = cadena2.split("");
  const objeto = {};
  cadena2.forEach((letra) => {
    objeto[letra] ? objeto[letra] += 1 : objeto[letra] = 1;
  })

  const newArray = Object.entries(objeto);
  newArray.sort((a, b) => b[1] - a[1])

  return newArray[0][0]; */
}
caracteresMasFrecuentes('programming');

module.exports = {
  sumaDeRango,
  caracteresMasFrecuentes
}