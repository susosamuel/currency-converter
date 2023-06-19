import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CurrencyConverter } from './pages/CurrencyConverter/CurrencyConverter.tsx'

const queryClient = new QueryClient()
const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <CurrencyConverter />
        </QueryClientProvider>
    )
}

export default App
