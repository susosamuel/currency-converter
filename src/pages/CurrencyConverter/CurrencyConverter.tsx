import { FC } from 'react'
import { CenteredLayout, LoadingWrapper } from '../../components'
import { useExchangeRate } from '../../data/hooks'
import { SupportedCurrencies } from '../../types/SupportedCurrencies.ts'
import { Form } from './components/Form.tsx'
import { DEFAULT_SUMMARY_CURRENCY } from '../../constants/DefaultCurrency.ts'

export const CurrencyConverter: FC = () => {
    const { isLoading: areExchangeRatesLoading } = useExchangeRate({
        baseCurrency: DEFAULT_SUMMARY_CURRENCY,
        exchangeCurrencies: Object.values(SupportedCurrencies),
    })

    const addNewTableEntry = (newEntry: number) => {
        console.log(newEntry)
    }
    return (
        <CenteredLayout>
            <LoadingWrapper isLoading={areExchangeRatesLoading}>
                <h2 className="font-extrabold my-4 text-2xl">Currency converter</h2>
                <Form onSubmit={addNewTableEntry} />
            </LoadingWrapper>
        </CenteredLayout>
    )
}
