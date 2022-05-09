import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
    margin-bottom: 24px;
  }
  body {
    background: #fff;
    color: #fff;
  }
  button {
    cursor: pointer;
  }
`;
