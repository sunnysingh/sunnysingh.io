import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    color: #d1d1e4;
    letter-spacing: 0.02rem;
    background-color: #1c1c22;
  }

  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  img,
  embed,
  iframe,
  object,
  audio,
  video {
    height: auto;
    max-width: 100%;
  }

  svg {
    vertical-align: bottom;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
    text-align: left;
  }

  a {
    color: #d1d1e4;
    text-decoration: underline;
    text-decoration-color: rgba(255, 255, 255, 0.3);
    transition: color 200ms ease;

    &:hover,
    &:focus {
      color: #fff;
      text-decoration: none;
      outline-width: 3px;
    }
  }
`;

export default GlobalStyle;
