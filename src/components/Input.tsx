import { FC } from 'react'

interface InputProps {
    label: string
    value: string
    onChange: (v: string) => void
}

export const Input: FC<InputProps> = ({ label, value, onChange }) => (
    <div>
        <label>{label}</label>
        <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
)
