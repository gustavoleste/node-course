const sum = (a,b) => {
    if(typeof a !== 'number' && typeof b !== 'number'){
        return new Error('the parameters are not a number')
    }
    return a + b
}

module.exports = sum