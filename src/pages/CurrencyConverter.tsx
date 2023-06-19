import { FC } from 'react'
import { CenteredLayout, LoadingWrapper } from '../components'
import { useExchangeRate } from '../data/hooks'
import { SupportedCurrencies } from '../types/SupportedCurrencies.ts'

export const CurrencyConverter: FC = () => {
    const { data: exchangeRates, isLoading: areExchangeRatesLoading } = useExchangeRate({
        baseCurrency: SupportedCurrencies.USD,
        exchangeCurrencies: [SupportedCurrencies.EUR, SupportedCurrencies.CZK],
    })
    console.log(exchangeRates)
    return (
        <CenteredLayout>
            <LoadingWrapper isLoading={areExchangeRatesLoading}>Currency Converter</LoadingWrapper>
        </CenteredLayout>
    )
}
