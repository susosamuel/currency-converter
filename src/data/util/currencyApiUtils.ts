import { CURRENCY_API_BASE_URL } from '../../constants/CurrencyApiBaseUrl.ts'
import { CURRENCY_API_KEY } from '../../constants/CurrencyApiKey.ts'
import { ExchangeRateRequest } from '../types/ExchangeRateRequest.ts'

export const API_URL = `${CURRENCY_API_BASE_URL}?apikey=${CURRENCY_API_KEY}`

export const getCurrencyParams = ({ baseCurrency, exchangeCurrencies }: ExchangeRateRequest) =>
    `base_currency=${baseCurrency}&currencies=${exchangeCurrencies.join('%2C')}`
