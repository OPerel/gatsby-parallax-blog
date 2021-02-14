import { createGlobalStyle } from 'styled-components';
import 'typeface-titillium-web';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Titillium Web', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font: 112.5%/1.45em georgia, serif;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: 'Titillium Web', sans-serif;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    color: #d9f7ff
  }

  a {
    color: #72e2ff;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  a:hover {
    text-decoration: underline;
    color: #2cccd8;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 1.45rem 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    line-height: 1.1;
  }

  p {
    margin: 0;
    color: #94ada8;
    font-weight: 300;
  }
`

export default GlobalStyle;