import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    font-family: 'Inter', sans-serif;
    background: linear-gradient(
  135deg,
  #050514 0%,
  #0b0b2a 50%,
  #121240 100%
);
    color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  button{
    border: none;
    background: none;
    font: inherit;
    cursor: pointer;
  }

  input,
  textarea,
  select{
    font: inherit;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol{
    list-style: none;
  }

  img{
    max-width: 100%;
    display: block;
  }

  #root{
    min-height: 100vh;
  }
`;

export default GlobalStyle;