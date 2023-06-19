import { SupportedCurrency } from '../types/SupportedCurrency.ts'

export type ExchangeRateRequest = {
    baseCurrency: SupportedCurrency
    exchangeCurrencies: SupportedCurrency[]
}

export type ExchangeRateResponse = {
    [key in SupportedCurrency]: number
}
