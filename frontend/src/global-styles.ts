import { globalCss } from '@stitches/react'
import { normalize } from 'stitches-normalize-css'

export const globalStyles = globalCss(...normalize, {
  html: {
    boxSizing: 'border-box',
    height: '100%',
    backgroundColor: 'white',
    transition: 'background 150ms ease-in-out',
    scrollbarGutter: 'stable',
  },
  body: {
    fontFamily: 'sans-serif',
    height: '100%',
    margin: 0,
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  '#root, #storybook-root': {
    height: '100%',
    '&.blurred': {
      filter: 'blur(4px)',
    },
  },
  'h1, h2, h3, h4, h5, h6, p': {
    margin: 0,
  },
  button: {
    appearance: 'none',
    border: 'none',
    background: 'none',
    borderRadius: 0,
    padding: 0,
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  'ol, ul': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  'img, svg': {
    display: 'block',
  },
  // remove blue background on autofill in chrome
  'input, select, textarea': {
    '&:-webkit-autofill': {
      'box-shadow': '0 0 0px 1000px #ffffff inset',
    },
  },
  'a, button': {
    '&:focus-visible': {
      outline: 'none',
      paddedOutline: 'white',
    },
  },
})
