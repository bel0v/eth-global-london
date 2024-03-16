import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'

export const Connect = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: '5f13430c-a2bb-413d-bf31-32bc255cf632',
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <DynamicWidget />
    </DynamicContextProvider>
  )
}
