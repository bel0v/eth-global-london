import { styled } from '@stitches/react'
import { Connect } from './Connect'

const HeaderWrapper = styled('header', { background: 'grey' })

export const Header = () => {
  return (
    <HeaderWrapper>
      <Connect />
    </HeaderWrapper>
  )
}
