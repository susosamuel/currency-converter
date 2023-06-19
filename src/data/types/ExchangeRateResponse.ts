import { SupportedCurrency } from '../../types/SupportedCurrency.ts'

export type ExchangeRateResponse = {
    [key in SupportedCurrency]: number
}
