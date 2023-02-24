import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;
