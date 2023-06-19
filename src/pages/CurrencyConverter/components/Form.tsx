import { FC, useState } from 'react'
import { NumberInput, Select } from '../../../components/form'
import { SupportedCurrency } from '../../../types/SupportedCurrency.ts'
import { Button, LoadingWrapper } from '../../../components'
import { useExchangeRate } from '../../../data/hooks'
import { DEFAULT_SUMMARY_CURRENCY } from '../../../constants/DefaultCurrency.ts'
import { roundAmount } from '../../../data/util/numericalUtils.ts'
import { TableRow } from '../../../types/TableRow.ts'

interface FormProps {
    onSubmit: (addedRow: TableRow) => void
}

export const Form: FC<FormProps> = ({ onSubmit }) => {
    // note to the reviewer, I thought that integrating of a form library or creating custom from hook would be an overkill for two values, so I went with two states
    const [amount, setAmount] = useState(0)
    const [exchangeCurrency, setExchangeCurrency] = useState<SupportedCurrency>(SupportedCurrency.CZK)
    const { data: exchangeRatesForCurrency, isLoading: areExchangeRatesLoading } = useExchangeRate({
        baseCurrency: DEFAULT_SUMMARY_CURRENCY,
        exchangeCurrencies: Object.values(SupportedCurrency),
    })

    const selectItems = Object.values(SupportedCurrency)

    const exchangeRate = exchangeRatesForCurrency ? exchangeRatesForCurrency[exchangeCurrency] : null

    const getTableEntryPreview = () => {
        if (!exchangeRate) return null
        return `${roundAmount(amount / exchangeRate)} ${DEFAULT_SUMMARY_CURRENCY}`
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!exchangeRate) return

        onSubmit({
            valueAmount: amount,
            valueCurrency: exchangeCurrency,
            valueAmountExchanged: roundAmount(amount / exchangeRate),
        })
    }

    const isSubmitDisabled = exchangeRate === null || amount === 0

    return (
        <LoadingWrapper isLoading={areExchangeRatesLoading}>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-2 items-centerx">
                    <NumberInput label={'Enter Amount'} onChange={setAmount} />
                    <Select<SupportedCurrency>
                        label="Select currency"
                        defaultValue={exchangeCurrency}
                        selectItems={selectItems}
                        onChange={(v) => setExchangeCurrency(v)}
                    />
                    <Button label={'Submit'} disabled={isSubmitDisabled} />
                </div>
            </form>
            <div className="h-8">{amount > 0 && <div className="my-2">{getTableEntryPreview()}</div>}</div>
        </LoadingWrapper>
    )
}
