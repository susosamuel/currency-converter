import { getCurrencyParams } from '../currencyApiUtils'
import { SupportedCurrency } from '../../../types/SupportedCurrency.ts'

describe('getCurrencyParams() method', () => {
    test('for one exchange currency', () => {
        expect(
            getCurrencyParams({ baseCurrency: SupportedCurrency.CZK, exchangeCurrencies: [SupportedCurrency.EUR] }),
        ).toBe('base_currency=CZK&currencies=EUR')
    })

    test('for more exchange currencies ', () => {
        expect(
            getCurrencyParams({
                baseCurrency: SupportedCurrency.CZK,
                exchangeCurrencies: [SupportedCurrency.EUR, SupportedCurrency.USD],
            }),
        ).toBe('base_currency=CZK&currencies=EUR%2CUSD')
    })

    test('for empty array exchangeCurrencies array', () => {
        expect(() => {
            getCurrencyParams({
                baseCurrency: SupportedCurrency.CZK,
                exchangeCurrencies: [],
            })
        }).toThrow('Invalid argument')
    })
})
