import { SupportedCurrency } from '../../types/SupportedCurrency.ts'

export type ExchangeRateRequest = {
    baseCurrency: SupportedCurrency
    exchangeCurrencies: SupportedCurrency[]
}
