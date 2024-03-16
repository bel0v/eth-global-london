import { AppRoutes } from './app-routes'
import { GlobalStyles } from './global-styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core'

function App() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: '5f13430c-a2bb-413d-bf31-32bc255cf632',
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <Router>
        <GlobalStyles />
        <AppRoutes />
      </Router>
    </DynamicContextProvider>
  )
}

export default App
