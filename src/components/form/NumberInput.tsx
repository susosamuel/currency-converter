import { FC } from 'react'

interface NumberInputProps {
    label: string
    onChange: (v: number) => void
}

export const NumberInput: FC<NumberInputProps> = ({ label, onChange }) => (
    <>
        <label className="mx-2 self-center">{label}</label>
        <input
            type="number"
            className="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
            onChange={(e) => onChange(Number(e.target.value))}
        />
    </>
)
