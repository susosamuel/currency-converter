import { useQuery } from '@tanstack/react-query'
import { ExchangeRateResponse } from '../types/ExchangeRateResponse.ts'
import { API_URL, getCurrencyParams } from '../util/currencyApiUtils.ts'
import { ExchangeRateRequest } from '../types/ExchangeRateRequest.ts'

const ExchangeRatesKey = 'ExchangeRatesKey'

const getExchangeRatesKey = (request: ExchangeRateRequest) => [ExchangeRatesKey, request]

const getExchangeRate = async (request: ExchangeRateRequest): Promise<ExchangeRateResponse> => {
    const rsp = await fetch(`${API_URL}&${getCurrencyParams(request)}`)
    const { data } = await rsp.json()
    return data
}

export const useExchangeRate = (request: ExchangeRateRequest) =>
    useQuery<ExchangeRateResponse>(getExchangeRatesKey(request), () => getExchangeRate(request))
