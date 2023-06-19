import { FC, ReactNode } from 'react'

interface CenteredLayoutProps {
    children: ReactNode
}

export const CenteredLayout: FC<CenteredLayoutProps> = ({ children }) => (
    <div className="grid place-items-center">{children}</div>
)
