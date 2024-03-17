import { AppRoutes } from './app-routes'
import { GlobalStyles } from './global-styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { evmNetworks } from './chains'
const queryClient = new QueryClient()

function App() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: '5f13430c-a2bb-413d-bf31-32bc255cf632',
        walletConnectors: [EthereumWalletConnectors],
        evmNetworks,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Router>
          <GlobalStyles />
          <AppRoutes />
        </Router>
      </QueryClientProvider>
    </DynamicContextProvider>
  )
}

export default App
