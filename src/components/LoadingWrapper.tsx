import { FC, ReactNode } from 'react'

interface LoadingWrapperProps {
    isLoading: boolean
    children: ReactNode
}

export const LoadingWrapper: FC<LoadingWrapperProps> = ({ isLoading, children }) => {
    return isLoading ? <>Loading ... ⧖</> : <>{children}</>
}
