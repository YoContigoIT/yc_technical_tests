const sumarArray = (arr) => arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0,
);

const multiplicarArray = (arr) => arr.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    1,
);

const usarForEach = (arr) => {
    newArr = new Array();

    arr.forEach(
        element => ( newArr.push(element * multiplier) ),
        multiplier = 2,
    );

    return newArr;
}

const usarMap = (arr) => arr.map(
    element => ( element += initialValue += 2 ),
    initialValue = 0,
);

const usarFilter = (arr) => arr.filter(element => (element % 2 === 0));

const usarFind = (arr, valor) => arr.find(element => element === valor);

module.exports = {
    sumarArray,
    multiplicarArray,
    usarForEach,
    usarMap,
    usarFilter,
    usarFind
}