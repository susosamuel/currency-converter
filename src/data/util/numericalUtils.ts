import { DEFAULT_DECIMALS } from '../../constants/DefaultDecimals.ts'

export const roundAmount = (value: number, decimals = DEFAULT_DECIMALS): number => Number(value.toFixed(decimals))
