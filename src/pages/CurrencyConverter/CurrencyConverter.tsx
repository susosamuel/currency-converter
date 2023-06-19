import { FC, useState } from 'react'
import { CenteredLayout } from '../../components'
import { Form } from './components/Form.tsx'
import { Table } from './components/Table.tsx'
import { TableRow } from '../../types/TableRow.ts'

export const CurrencyConverter: FC = () => {
    const [tableRows, setTableRows] = useState<TableRow[]>([])
    const addNewTableEntry = (tableRow: TableRow) => {
        setTableRows((prev) => [...prev, tableRow])
    }

    return (
        <CenteredLayout>
            <h2 className="font-extrabold my-4 text-2xl">Currency converter</h2>
            <Form onSubmit={addNewTableEntry} />
            <Table rows={tableRows} />
        </CenteredLayout>
    )
}
