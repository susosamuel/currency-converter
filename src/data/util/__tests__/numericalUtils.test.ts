import { roundAmount } from '../numericalUtils.ts'

describe('roundAmount', () => {
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
