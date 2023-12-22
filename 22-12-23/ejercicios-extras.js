const sumarArray = (arr) => {
    const suma = arr.reduce((acumulador, value) => acumulador + value, 0);
    return suma;
}

const multiplicarArray = (arr) => {
    const multiplicar = arr.reduce((acumulador, value) => acumulador * value, 1);
    return multiplicar
}

const usarForEach = (arr) => {
    let newArray = [];
    arr.forEach(element => {
        newArray.push(element * 2);
    });
    return newArray;
}

const usarMap = (arr) => {
    const newMap = arr.map(element => {
        return element * 3;
    });
    return newMap;
}

const usarFilter = (arr) => {
    const filter = arr.filter(element => element % 2 === 0);
    return filter;
}

const usarFind = (arr, valor) => {
    const values = arr.find(element => element === valor);
    return values;
}

module.exports = {
    sumarArray,
    multiplicarArray,
    usarForEach,
    usarMap,
    usarFilter,
    usarFind
}