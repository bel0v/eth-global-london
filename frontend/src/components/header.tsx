import styled from 'styled-components'
import { ConnectButton } from './connect-button'

const HeaderWrapper = styled.header`
  background: grey;
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <ConnectButton />
    </HeaderWrapper>
  )
}
