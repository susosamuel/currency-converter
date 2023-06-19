import { FC } from 'react'
import { TableRow } from '../../../types/TableRow.ts'
import { DEFAULT_SUMMARY_CURRENCY } from '../../../constants/DefaultCurrency.ts'
import { roundAmount, sumArrayProperty } from '../../../util/numericalUtils.ts'

interface TableProps {
    rows: TableRow[]
}

export const Table: FC<TableProps> = ({ rows }) => {
    if (!rows.length) return <>No entries were defined</>

    const totalAmount = sumArrayProperty<TableRow>(rows, 'valueAmountExchanged')
    return (
        <div className="relative overflow-x-auto my-5">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Value
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Currency
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Exchanged Amount
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(({ valueAmount, valueCurrency, valueAmountExchanged }, index) => (
                        <tr
                            key={valueAmount + valueCurrency + index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {valueAmount}
                            </th>
                            <td className="px-6 py-4">{valueCurrency}</td>
                            <td className="px-6 py-4">
                                {valueAmountExchanged} {DEFAULT_SUMMARY_CURRENCY}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            Total: {roundAmount(totalAmount)} {DEFAULT_SUMMARY_CURRENCY}
        </div>
    )
}
