const sum = require('../sum')

describe('sum test', () => {
    it('should return error when called without parameters', () => {
        const expected = new Error('the parameters are not a number')
        const result = sum()
        expect(result).toEqual(expected)
    })
    it('should return error when called with one parameters', () => {
        const expected = new Error('the parameters are not a number')
        const result = sum()
        expect(result).toEqual(expected)
    })
    it('should return error when called parameters are not number', () => {
        const expected = new Error('the parameters are not a number')
        const result = sum('a','b')
        expect(result).toEqual(expected)
    })
    it('should return 4 when called with 2 and 2', () => {
        const expected = 4
        const result = sum(2,2)
        expect(result).toEqual(expected)
    })
})