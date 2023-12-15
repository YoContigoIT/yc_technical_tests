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
Necesito un objeto para almacenar la cantidad de veces que se repite mi cadena
posterior a esto teniendo ya el numero en el que se repiten necesito
ir comparando uno a uno cual es mayor y en una variable irla guardando en dado caso que exista uno mayor
reemplazarlo y asi hasta que termine mi cadena y retornarla
*/ 

function caracteresMasFrecuentes(cadena) {
  //Tu código aquí
    //Aquí voy a ir almacenando la frecuencia con la que se repiten mis caracteres
    const frecuencia = {};
  
    // Aqui voy a contar la frecuencia de cada carácter
    for (const caracter of cadena) {
        frecuencia[caracter] = (frecuencia[caracter] || 0) + 1;
    }
  
    // Aqui voy almacenar el caracter con mayor frecuencia
    let caracterFrecuente = '';
    // Aqui voy almacenar el valor que mas se repite de mi caracter
    let mayorFrecuencia = 0;
  
    //En frecuencia ya tengo mi cadena con el valor que se repite solo queda ir comparando uno a uno
    for (const caracter in frecuencia) {
     //voy a comparar entre cada frecuencia si es mayor a mi variable mayorFrecuencia
      if (frecuencia[caracter] > mayorFrecuencia) {
      //Si es mayor que me guarde el caracter y el valor que se repite
        caracterFrecuente = caracter;
        mayorFrecuencia = frecuencia[caracter];
      }
    }
  //al finalizar mi cadena que me devuelva el que mas se repite
    return caracterFrecuente;
  }

module.exports = { 
  sumaDeRango,
  caracteresMasFrecuentes
}