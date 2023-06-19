import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { API_URL, getCurrencyParams } from '../util/currencyApiUtils.ts'
import { ExchangeRateRequest, ExchangeRateResponse } from '../types.ts'

const ExchangeRatesKey = 'ExchangeRatesKey'

const getExchangeRatesKey = (request: ExchangeRateRequest) => [ExchangeRatesKey, request]

const getExchangeRate = async (request: ExchangeRateRequest): Promise<ExchangeRateResponse> => {
    const rsp = await fetch(`${API_URL}&${getCurrencyParams(request)}`)

    if (!rsp.ok) {
        throw new Error(`Failed to fetch exchange rate. Status: ${rsp.status}`)
    }

    const { data } = await rsp.json()

    return data
}

export const useExchangeRate = (request: ExchangeRateRequest, options?: UseQueryOptions<ExchangeRateResponse>) =>
    useQuery<ExchangeRateResponse>(getExchangeRatesKey(request), () => getExchangeRate(request), options)
