/*
3.- Suma de un Rango de Números:
Calcule la suma de todos los números enteros en un rango dado, incluyendo ambos extremos.

La función debe tomar dos números enteros como parámetros y devolver la suma de todos
los números enteros (positivos o negativos) entre ellos.

1.- Ciclo menor al mayor - check
2.- Los numero se tiene que ir sumando en una varible - check
3.- Retornamos el valor de la variable - check
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
  Desarrolla una función en JavaScript que, dada una cadena de texto,
  identifique y devuelva el primer carácter que aparece con mayor frecuencia.
  La función debe considerar todos los caracteres y no distinguir entre mayúsculas
  y minúsculas. En caso de que varios caracteres tengan la misma frecuencia máxima,
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
*/

function caracteresMasFrecuentes(cadena) {
  if (typeof (cadena) != 'string') {
    throw new Error('El parámetro no es una cadena')
  }

  let texto2 = cadena.toLowerCase().split("");
  let repeticionesArreglo = [];
  const repeticiones = {};
  texto2.forEach(letra => {
    repeticiones[letra] ? repeticiones[letra] += 1 : repeticiones[letra] = 1;
  });
  repeticionesArreglo = Object.entries(repeticiones);
  repeticionesArreglo.sort((a, b) => b[1] - a[1]);

  const mayor = repeticionesArreglo[0][1];

  repeticionesArreglo = repeticionesArreglo.filter(value =>
    value[1] === mayor
  ).map(value => value[0])
  
  return repeticionesArreglo.length <= 1 ? repeticionesArreglo[0] : repeticionesArreglo;
}

module.exports = {
  sumaDeRango,
  caracteresMasFrecuentes
}