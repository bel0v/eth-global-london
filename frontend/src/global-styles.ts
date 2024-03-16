import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
    background-color: var(--pearl);
    transition: background 150ms ease-in-out;
    scrollbar-gutter: stable;
  }

  body {
    font-family: sans-serif;
    height: 100%;
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  #root{
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  button {
    appearance: none;
    border: none;
    background: none;
    border-radius: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img,
  svg {
    display: block;
  }

  /* remove blue background on autofill in chrome */
  input,
  select,
  textarea {
    &:-webkit-autofill {
      box-shadow: 0 0 0px 1000px #ffffff inset;
    }
  }

  a,
  button {
    &:focus-visible {
      outline: none;
    }
  }


  :root {
  /* fonts */
  --font-exo: "Exo", sans-serif;

  /* font sizes */
  --font-size-12: 12px;
  --font-size-16: 16px;
  --font-size-24: 24px;
  --font-size-40: 40px;

  /* Colors */
  --pearl: #f1f1f1;
  --bg-warm-light-80: rgba(249, 241, 241, 0.8);
  --bg-cold: #d5d7e1;
  --blue: #0c0b49;

  /* Gaps */
  --gap-8: 8px;

  /* Paddings */
  --padding-8: 8px;
  --padding-12: 12px;
  --padding-16: 16px;
  --padding-24: 24px;
  --padding-32: 32px;

  /* Border radiuses */
  --br-24: 24px;
  --br-8: 8px;

  /* TO UPDATE */

  /* font sizes */
--font-size-5xl: 24px;
--font-size-base: 16px;
--font-size-21xl: 40px;
--font-size-xs: 12px;

/* Colors */
--bg-warm-light: #f9f1f1;
--pearl: #f1f1f1;
--bg-warm-light-80: rgba(249, 241, 241, 0.8);
--bg-cold: #d5d7e1;
--blue: #0c0b49;
--color-white: #fff;
--bg-warm-bold: #c1a9a4;
--color-black: #000;

/* Gaps */
--gap-5xs: 8px;
--gap-9xs: 4px;
--gap-5xl: 24px;
--gap-3xs: 10px;

/* Paddings */
--padding-5xl: 24px;
--padding-xs: 12px;
--padding-5xs: 8px;
--padding-base: 16px;
--padding-3xs: 10px;
--padding-9xs: 4px;

/* Border radiuses */
--br-5xl: 24px;
--br-5xs: 8px;
--br-81xl: 100px;
--br-base: 16px;


}
`
