const sumarArray = (arr) => {
    const suma = arr.reduce((acc, curr) => acc + curr, 0);
    console.log('Suma del array:', suma);
    return suma;
  };
  
  const multiplicarArray = (arr) => {
    const multiplicacion = arr.reduce((acc, curr) => acc * curr, 1);
    console.log('Multiplicación del array:', multiplicacion);
    return multiplicacion;
  };
  
  const usarForEach = (arr) => {
    const newArray = [];
    arr.forEach((element) => {
      const nuevoElemento = element * 2;
      newArray.push(nuevoElemento);
    });
    console.log('Usando forEach:', newArray);
    return newArray;
  };
  
  const usarMap = (arr) => {
    const newArray = arr.map((element) => element * 3);
    console.log('Usando map:', newArray);
    return newArray;
  };
  
  const usarFilter = (arr) => {
    const newArray = arr.filter((element) => element % 2 === 0);
    console.log('Usando filter:', newArray);
    return newArray;
  };
  
  const usarFind = (arr, valor) => {
    const elementoEncontrado = arr.find((element) => element === valor);
    console.log('Usando find:', elementoEncontrado);
    return elementoEncontrado;
  };
  
  module.exports = {
    sumarArray,
    multiplicarArray,
    usarForEach,
    usarMap,
    usarFilter,
    usarFind
  };
  