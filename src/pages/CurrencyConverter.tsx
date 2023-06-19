import { FC } from 'react'
import { CenteredLayout, LoadingWrapper } from '../components'

export const CurrencyConverter: FC = () => {
    return (
        <CenteredLayout>
            <LoadingWrapper isLoading={false}>Currency Converter</LoadingWrapper>
        </CenteredLayout>
    )
}
