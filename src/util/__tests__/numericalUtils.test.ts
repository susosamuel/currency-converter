import { roundAmount, sumArrayProperty } from '../numericalUtils'

describe('roundAmount()', () => {
    test('should round the value to the default number of decimals', () => {
        const value = 12.34567424224
        const expected = 12.3457

        const roundedValue = roundAmount(value)

        expect(roundedValue).toEqual(expected)
    })

    test('should round the value to the specified number of decimals', () => {
        const value = 12.34567
        const decimals = 3
        const expected = 12.346

        const roundedValue = roundAmount(value, decimals)

        expect(roundedValue).toEqual(expected)
    })

    test('should round negative values correctly', () => {
        const value = -12.345673213
        const expected = -12.3457

        const roundedValue = roundAmount(value)

        expect(roundedValue).toEqual(expected)
    })
})

describe('sumProperty()', () => {
    test('should return the sum of the specified property for an array of objects', () => {
        const rows = [{ valueAmountExchanged: 10 }, { valueAmountExchanged: 20 }, { valueAmountExchanged: 30 }]
        const property = 'valueAmountExchanged'
        const expectedSum = 60

        const sum = sumArrayProperty(rows, property)

        expect(sum).toEqual(expectedSum)
    })

    test('should return 0 for an empty array', () => {
        const rows: never[] = []
        const property = 'valueAmountExchanged'
        const expectedSum = 0

        const sum = sumArrayProperty(rows, property)

        expect(sum).toEqual(expectedSum)
    })
})
