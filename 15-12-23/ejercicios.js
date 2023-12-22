/*
3.- Suma de un Rango de Números:
Calcule la suma de todos los números enteros en un rango dado, incluyendo ambos extremos. La función debe tomar dos números enteros como parámetros y devolver la suma de todos los números enteros (positivos o negativos) entre ellos, incluso si los parámetros están en orden descendente.
*/

function sumaDeRango(numInicio, numFinal) {
  // Tu código aquí

  let suma;
  for(let i = numInicio; i <= numFinal; i++){
    suma += i
    console.log(suma,i);
  }
}


/*
  * 4.- Encontrar el Carácter Más Frecuente:
  Desarrolla una función en JavaScript que, dada una cadena de texto,
  identifique y devuelva el primer carácter que aparece con mayor frecuencia.
  La función debe considerar todos los caracteres y no distinguir entre mayúsculas y minúsculas.
  En caso de que varios caracteres tengan la misma frecuencia máxima,
  la función deberá retornar un string que contenga únicamente el primer carácter encontrado.

  * EXTRA OPCIONAL: En caso de que varios caracteres tengan la misma frecuencia máxima, la función deberá retornar un array con todos estos caracteres.
  
  Consideraciones:
  - La función debe recibir una cadena de texto como parámetro.
  - Debe considerar todos los caracteres, sin distinción entre mayúsculas y minúsculas.
  - Identificar el carácter que aparece con mayor frecuencia en la cadena.
  - En caso de que varios caracteres tengan la misma frecuencia máxima, la función debe retornar solo el primer carácter encontrado.
  - La función debe retornar un string que contenga únicamente el carácter identificado.
  - Se espera que el código sea claro, legible y eficiente en cuanto a rendimiento.
  - Considerar casos límite y manejar posibles errores o situaciones inesperadas de manera apropiada.


  1.-recibir texto [X]
  2.-sin distinción entre mayúsculas y minúsculas [X]
  3.- encontrar el de mayor frecuencia
*/

function caracteresMasFrecuentes(cadena) {
  //Tu código aquí
  const toLower = cadena.toLowerCase();
  let data = [];
  let data2 = []

  for(let i = 0; i <= toLower.length -1; i++){

    data.push({
      caracter: toLower[i],
      index:toLower[i].length
    })

    // if (!data2.includes(toLower[i])){
    //   data2.push(toLower[i])
    //   console.log(i);
    // }
  }
  console.log(data);
  console.log(data2);
}

caracteresMasFrecuentes('AbEja12')

module.exports = { 
  sumaDeRango,
  caracteresMasFrecuentes
}