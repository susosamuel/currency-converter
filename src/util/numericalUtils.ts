import { DEFAULT_DECIMALS } from '../constants/DefaultDecimals.ts'

export const roundAmount = (value: number, decimals = DEFAULT_DECIMALS): number => Number(value.toFixed(decimals))

export const sumArrayProperty = <T>(arr: T[], property: keyof T): number => {
    return arr.reduce((acc, obj) => acc + Number(obj[property]), 0)
}
