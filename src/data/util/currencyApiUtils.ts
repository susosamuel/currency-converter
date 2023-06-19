import { CURRENCY_API_BASE_URL } from '../../constants/CurrencyApiBaseUrl.ts'
import { CURRENCY_API_KEY } from '../../constants/CurrencyApiKey.ts'
import { ExchangeRateRequest } from '../types.ts'

export const API_URL = `${CURRENCY_API_BASE_URL}?apikey=${CURRENCY_API_KEY}`

// note to the reviewer, using and installing query string for this one usecase seemed like an overkill
// if there were more requests then definitely it would made sense to use it
const CURRENCY_DIVIDER = '%2C'

export const getCurrencyParams = ({ baseCurrency, exchangeCurrencies }: ExchangeRateRequest) => {
    if (exchangeCurrencies.length === 0) throw 'Invalid argument'
    return `base_currency=${baseCurrency}&currencies=${exchangeCurrencies.join(CURRENCY_DIVIDER)}`
}
