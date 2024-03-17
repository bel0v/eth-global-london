import styled from 'styled-components'
import { Spinner } from './spinner'

type Variant = 'fullPage' | 'tall'

const SpinnerWrapper = styled.div<{ variant: Variant }>`
  height: ${(props) => `${props.variant === 'tall' ? '400px' : '100vh'}`};
  display: grid;
  place-items: center;
`

export const LoadingStatus = ({ variant = 'fullPage' }: { variant?: Variant }) => {
  return (
    <SpinnerWrapper variant={variant}>
      <Spinner />
    </SpinnerWrapper>
  )
}
