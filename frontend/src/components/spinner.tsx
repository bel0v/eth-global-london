import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    box-shadow:
      0px -30px var(--spinner-color),
      10px -30px var(--spinner-color),
      20px -20px var(--spinner-color),
      30px -10px var(--spinner-color),
      30px 0px var(--spinner-color),
      30px 10px var(--spinner-color),
      20px 20px var(--spinner-color),
      10px 30px var(--spinner-color),
      0px 30px transparent,
      -10px 30px transparent,
      -20px 20px transparent,
      -30px 10px transparent,
      -30px 0px transparent,
      -30px -10px transparent,
      -20px -20px transparent,
      -10px -30px transparent;
  }
  6.25% {
    box-shadow:
      0px -30px transparent,
      10px -30px var(--spinner-color),
      20px -20px var(--spinner-color),
      30px -10px var(--spinner-color),
      30px 0px var(--spinner-color),
      30px 10px var(--spinner-color),
      20px 20px var(--spinner-color),
      10px 30px var(--spinner-color),
      0px 30px var(--spinner-color),
      -10px 30px transparent,
      -20px 20px transparent,
      -30px 10px transparent,
      -30px 0px transparent,
      -30px -10px transparent,
      -20px -20px transparent,
      -10px -30px transparent;
  }
  12.5% {
    box-shadow:
      0px -30px transparent,
      10px -30px transparent,
      20px -20px var(--spinner-color),
      30px -10px var(--spinner-color),
      30px 0px var(--spinner-color),
      30px 10px var(--spinner-color),
      20px 20px var(--spinner-color),
      10px 30px var(--spinner-color),
      0px 30px var(--spinner-color),
      -10px 30px var(--spinner-color),
      -20px 20px transparent,
      -30px 10px transparent,
      -30px 0px transparent,
      -30px -10px transparent,
      -20px -20px transparent,
      -10px -30px transparent;
  }
  18.75% {
    box-shadow:
      0px -30px transparent,
      10px -30px transparent,
      20px -20px transparent,
      30px -10px var(--spinner-color),
      30px 0px var(--spinner-color),
      30px 10px var(--spinner-color),
      20px 20px var(--spinner-color),
      10px 30px var(--spinner-color),
      0px 30px var(--spinner-color),
      -10px 30px var(--spinner-color),
      -20px 20px var(--spinner-color),
      -30px 10px transparent,
      -30px 0px transparent,
      -30px -10px transparent,
      -20px -20px transparent,
      -10px -30px transparent;
  }
  25% {
    box-shadow:
      0px -30px transparent,
      10px -30px transparent,
      20px -20px transparent,
      30px -10px transparent,
      30px 0px var(--spinner-color),
      30px 10px var(--spinner-color),
      20px 20px var(--spinner-color),
      10px 30px var(--spinner-color),
      0px 30px var(--spinner-color),
      -10px 30px var(--spinner-color),
      -20px 20px var(--spinner-color),
      -30px 10px var(--spinner-color),
      -30px 0px transparent,
      -30px -10px transparent,
      -20px -20px transparent,
      -10px -30px transparent;
  }
  31.25% {
    box-shadow:
      0px -30px transparent,
      10px -30px transparent,
      20px -20px transparent,
      30px -10px transparent,
      30px 0px transparent,
      30px 10px var(--spinner-color),
      20px 20px var(--spinner-color),
      10px 30px var(--spinner-color),
      0px 30px var(--spinner-color),
      -10px 30px var(--spinner-color),
      -20px 20px var(--spinner-color),
      -30px 10px var(--spinner-color),
      -30px 0px var(--spinner-color),
      -30px -10px transparent,
      -20px -20px transparent,
      -10px -30px transparent;
  }
  37.5% {
    box-shadow:
      0px -30px transparent,
      10px -30px transparent,
      20px -20px transparent,
      30px -10px transparent,
      30px 0px transparent,
      30px 10px transparent,
      20px 20px var(--spinner-color),
      10px 30px var(--spinner-color),
      0px 30px var(--spinner-color),
      -10px 30px var(--spinner-color),
      -20px 20px var(--spinner-color),
      -30px 10px var(--spinner-color),
      -30px 0px var(--spinner-color),
      -30px -10px var(--spinner-color),
      -20px -20px transparent,
      -10px -30px transparent;
  }
  43.75% {
    box-shadow:
      0px -30px transparent,
      10px -30px transparent,
      20px -20px transparent,
      30px -10px transparent,
      30px 0px transparent,
      30px 10px transparent,
      20px 20px transparent,
      10px 30px var(--spinner-color),
      0px 30px var(--spinner-color),
      -10px 30px var(--spinner-color),
      -20px 20px var(--spinner-color),
      -30px 10px var(--spinner-color),
      -30px 0px var(--spinner-color),
      -30px -10px var(--spinner-color),
      -20px -20px var(--spinner-color),
      -10px -30px transparent;
  }
  50% {
    box-shadow:
      0px -30px transparent,
      10px -30px transparent,
      20px -20px transparent,
      30px -10px transparent,
      30px 0px transparent,
      30px 10px transparent,
      20px 20px transparent,
      10px 30px transparent,
      0px 30px var(--spinner-color),
      -10px 30px var(--spinner-color),
      -20px 20px var(--spinner-color),
      -30px 10px var(--spinner-color),
      -30px 0px var(--spinner-color),
      -30px -10px var(--spinner-color),
      -20px -20px var(--spinner-color),
      -10px -30px var(--spinner-color);
  }
  56.25% {
    box-shadow:
      0px -30px var(--spinner-color),
      10px -30px transparent,
      20px -20px transparent,
      30px -10px transparent,
      30px 0px transparent,
      30px 10px transparent,
      20px 20px transparent,
      10px 30px transparent,
      0px 30px transparent,
      -10px 30px var(--spinner-color),
      -20px 20px var(--spinner-color),
      -30px 10px var(--spinner-color),
      -30px 0px var(--spinner-color),
      -30px -10px var(--spinner-color),
      -20px -20px var(--spinner-color),
      -10px -30px var(--spinner-color);
  }
  62.5% {
    box-shadow:
      0px -30px var(--spinner-color),
      10px -30px var(--spinner-color),
      20px -20px transparent,
      30px -10px transparent,
      30px 0px transparent,
      30px 10px transparent,
      20px 20px transparent,
      10px 30px transparent,
      0px 30px transparent,
      -10px 30px transparent,
      -20px 20px var(--spinner-color),
      -30px 10px var(--spinner-color),
      -30px 0px var(--spinner-color),
      -30px -10px var(--spinner-color),
      -20px -20px var(--spinner-color),
      -10px -30px var(--spinner-color);
  }
  68.75% {
    box-shadow:
      0px -30px var(--spinner-color),
      10px -30px var(--spinner-color),
      20px -20px var(--spinner-color),
      30px -10px transparent,
      30px 0px transparent,
      30px 10px transparent,
      20px 20px transparent,
      10px 30px transparent,
      0px 30px transparent,
      -10px 30px transparent,
      -20px 20px transparent,
      -30px 10px var(--spinner-color),
      -30px 0px var(--spinner-color),
      -30px -10px var(--spinner-color),
      -20px -20px var(--spinner-color),
      -10px -30px var(--spinner-color);
  }
  75% {
    box-shadow:
      0px -30px var(--spinner-color),
      10px -30px var(--spinner-color),
      20px -20px var(--spinner-color),
      30px -10px var(--spinner-color),
      30px 0px transparent,
      30px 10px transparent,
      20px 20px transparent,
      10px 30px transparent,
      0px 30px transparent,
      -10px 30px transparent,
      -20px 20px transparent,
      -30px 10px transparent,
      -30px 0px var(--spinner-color),
      -30px -10px var(--spinner-color),
      -20px -20px var(--spinner-color),
      -10px -30px var(--spinner-color);
  }
  81.25% {
    box-shadow:
      0px -30px var(--spinner-color),
      10px -30px var(--spinner-color),
      20px -20px var(--spinner-color),
      30px -10px var(--spinner-color),
      30px 0px var(--spinner-color),
      30px 10px transparent,
      20px 20px transparent,
      10px 30px transparent,
      0px 30px transparent,
      -10px 30px transparent,
      -20px 20px transparent,
      -30px 10px transparent,
      -30px 0px transparent,
      -30px -10px var(--spinner-color),
      -20px -20px var(--spinner-color),
      -10px -30px var(--spinner-color);
  }
  87.5% {
    box-shadow:
      0px -30px var(--spinner-color),
      10px -30px var(--spinner-color),
      20px -20px var(--spinner-color),
      30px -10px var(--spinner-color),
      30px 0px var(--spinner-color),
      30px 10px var(--spinner-color),
      20px 20px transparent,
      10px 30px transparent,
      0px 30px transparent,
      -10px 30px transparent,
      -20px 20px transparent,
      -30px 10px transparent,
      -30px 0px transparent,
      -30px -10px transparent,
      -20px -20px var(--spinner-color),
      -10px -30px var(--spinner-color);
  }
  93.75% {
    box-shadow:
      0px -30px var(--spinner-color),
      10px -30px var(--spinner-color),
      20px -20px var(--spinner-color),
      30px -10px var(--spinner-color),
      30px 0px var(--spinner-color),
      30px 10px var(--spinner-color),
      20px 20px var(--spinner-color),
      10px 30px transparent,
      0px 30px transparent,
      -10px 30px transparent,
      -20px 20px transparent,
      -30px 10px transparent,
      -30px 0px transparent,
      -30px -10px transparent,
      -20px -20px transparent,
      -10px -30px var(--spinner-color);
  }
  100% {
    box-shadow:
      0px -30px var(--spinner-color),
      10px -30px var(--spinner-color),
      20px -20px var(--spinner-color),
      30px -10px var(--spinner-color),
      30px 0px var(--spinner-color),
      30px 10px var(--spinner-color),
      20px 20px var(--spinner-color),
      10px 30px var(--spinner-color),
      0px 30px transparent,
      -10px 30px transparent,
      -20px 20px transparent,
      -30px 10px transparent,
      -30px 0px transparent,
      -30px -10px transparent,
      -20px -20px transparent,
      -10px -30px transparent;
  }
`

export const Spinner = styled.div`
  animation: ${spin} 1s linear infinite;
  height: 10px;
  width: 10px;
`
