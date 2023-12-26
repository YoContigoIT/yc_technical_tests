const sumarArray = (arr) => arr.reduce((acumulador, numero) => acumulador + numero, 0);

const multiplicarArray = (arr) => arr.reduce((acumulador, numero) => acumulador * numero, 1);

const usarForEach = (arr) => {
    let newArr = []
    arr.forEach(numero => {
        newArr.push(numero + numero)
    })
    return newArr
}

const usarMap = (arr) => arr.map((numero) => {
    return numero * 3
})

const usarFilter = (arr) => arr.filter(numero => numero % 2 === 0)

const usarFind = (arr, valor) => arr.find(numero => numero === valor)

module.exports = {
    sumarArray,
    multiplicarArray,
    usarForEach,
    usarMap,
    usarFilter,
    usarFind
}