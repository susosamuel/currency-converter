import { FC } from 'react'

interface ButtonProps {
    label: string
    onClick?: () => void
    disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ label, onClick, disabled }) => {
    return (
        <button
            onClick={() => onClick && onClick()}
            className={`py-2.5 px-5 text-sm font-medium text-gray-900 rounded-lg border border-gray-200 self-center ${
                disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
            }`}
            disabled={disabled}
        >
            {label}
        </button>
    )
}
