const sumarArray = (arr) => arr.reduce((acc, value) => acc + value, 0);

const multiplicarArray = (arr) => arr.reduce((acc, value) => acc * value, 1);

const usarForEach = (arr) => {
  const resultado = [];

  arr.forEach((element) => {
    resultado.push(element * 2);
  });

  return resultado;
};

const usarMap = (arr) =>
  arr.map((num) => {
    return num * 3;
  });

const usarFilter = (arr) =>
  arr.filter((arr) => {
    return arr % 2 == 0;
  });

const usarFind = (arr, valor) =>
  arr.find((arr) => {
    return arr == valor;
  });

module.exports = {
  sumarArray,
  multiplicarArray,
  usarForEach,
  usarMap,
  usarFilter,
  usarFind,
};
