import styled from 'styled-components'

export const Indicator = styled.div<{ size: number }>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  position: relative;
  border-radius: var(--br-81xl);
  background-color: var(--active);
  overflow: hidden;
  flex-shrink: 0;
`
