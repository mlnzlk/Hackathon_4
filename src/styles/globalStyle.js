import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    margin: 0 auto;
    max-width: 599px;
    min-width: 390px;
    min-height : calc(var(--vh, 1vh) * 100);
    text-align: center;
  }

  button {
    border: none;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  li {
    list-style: none;
  }

  input {
    outline: none;
  }

  .ir {
      width: 1px;
      height: 1px;
      margin: -1px;
      position: absolute;
      overflow: hidden;
      clip: rect(1px 1px 1px 1px);
    }
`;
