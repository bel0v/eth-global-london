import styled from 'styled-components'
import { ConnectButton } from './connect-button'
import { Link } from 'react-router-dom'
import LogoImage from '../images/logo-small.png'

const HeaderWrapper = styled.header`
  background: var(--bg-warm-light);
  padding-inline: 16px;
  border-bottom: var(--bg-cold) 1px solid;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <img src={LogoImage} height={30} alt="Momentor" />
      </Link>
      <ConnectButton />
    </HeaderWrapper>
  )
}
