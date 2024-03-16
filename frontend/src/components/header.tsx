import styled from 'styled-components'
import { ConnectButton } from './connect-button'

const HeaderWrapper = styled.header`
  background: grey;
  height: 50px;
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <ConnectButton />
    </HeaderWrapper>
  )
}
