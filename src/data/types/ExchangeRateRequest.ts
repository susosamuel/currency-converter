import { SupportedCurrencies } from '../../types/SupportedCurrencies.ts'

export type ExchangeRateRequest = {
    baseCurrency: SupportedCurrencies
    exchangeCurrencies: SupportedCurrencies[]
}
