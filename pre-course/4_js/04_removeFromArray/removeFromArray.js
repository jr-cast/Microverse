const removeFromArray = function (array, ...Args) {
    let a = array;
    let b = Args;
    let c = a.filter(d => !b.includes(d));
    return c;
}

// Do not edit below this line
module.exports = removeFromArray;
