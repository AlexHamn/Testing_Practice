const { expect, it } = require('@jest/globals')
const Calculator = require('./calculator')

describe('addTest', function () {
    it('add', () => {
        const calc = new Calculator()

        expect(calc.add(2, 2)).toBe(4)
        expect(calc.add(999, 999)).toBe(1998)
        expect(calc.add(1, 0)).toBe(1)
    })
},
describe('substractTest', function () {

    it('subtract', () => {
        const calc = new Calculator()

        expect(calc.subtract(2, 2)).toBe(0)
        expect(calc.subtract(50, 60)).toBe(-10)
        expect(calc.subtract(999, 998)).toBe(1)
    })
}),
describe('divideTest', function () {

    it('divide', () => {
        const calc = new Calculator()

        expect(calc.divide(20, 2)).toBe(10)
        expect(calc.divide(100, 100)).toBe(1)
        expect(calc.divide(0, 0)).toBe(NaN)

    })
}),
describe('multiplyTest', function () {
    it('multiply', ()=>{
        const calc = new Calculator()

        expect(calc.multiply(2,2)).toBe(4)
        expect(calc.multiply(100,100)).toBe(10000)
        expect(calc.multiply(0,0)).toBe(0)
        
    })
}))