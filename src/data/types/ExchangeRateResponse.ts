import { SupportedCurrencies } from '../../types/SupportedCurrencies.ts'

export type ExchangeRateResponse = {
    [key in SupportedCurrencies]: number
}
