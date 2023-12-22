const sumarArray = (arr) => arr.reduce((acc, value) => {
    return acc = acc + value;
}, 0)

//console.log(sumarArray([1, 2, 3, 4]));

const multiplicarArray = (arr) => arr.reduce((acc, value) => {
    return acc = acc * value;
})

//console.log(multiplicarArray([1, 2, 3, 4]));

const usarForEach = (arr) => {
    return arr.forEach((element) => {
        element+1;
    });
}

console.log(usarForEach([1, 2, 3, 4]));

const usarMap = (arr) => arr

const usarFilter = (arr) => arr

const usarFind = (arr, valor) => arr

module.exports = {
    sumarArray,
    multiplicarArray,
    usarForEach,
    usarMap,
    usarFilter,
    usarFind
}