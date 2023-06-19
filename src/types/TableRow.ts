import { SupportedCurrency } from './SupportedCurrency.ts'

export type TableRow = {
    valueAmount: number
    valueCurrency: SupportedCurrency
    valueAmountExchanged: number
}
