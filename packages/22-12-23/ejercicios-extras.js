const sumarArray = (arr) => { return arr.reduce((acc, val) => acc + val) }

const multiplicarArray = (arr) => { return arr.reduce((acc, val) => acc * val) }

const usarForEach = (arr) => {
    var otroArr = [];
    arr.forEach((x) => { otroArr.push(x*2) })
    return otroArr;
}

const usarMap = (arr) => { return arr.map((x) => x*3 )}

const usarFilter = (arr) => { return  arr.filter((x) => x % 2 === 0)}

const usarFind = (arr, valor) => { return arr.find((x) => x === valor)}

module.exports = {
    sumarArray,
    multiplicarArray,
    usarForEach,
    usarMap,
    usarFilter,
    usarFind
}