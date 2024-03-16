import styled from 'styled-components'
import IconBack from '../images/icons/icon-back.png'
import { Link } from 'react-router-dom'

const BackButtonImage = styled.img`
  width: 30px;
  position: relative;
  border-radius: var(--br-81xl);
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`

export const BackButton = ({ to }: { to: string }) => {
  return (
    <Link to={to}>
      <BackButtonImage alt="" src={IconBack} />
    </Link>
  )
}
