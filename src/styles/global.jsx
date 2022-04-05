import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
  }

  :root{
    --green: #0C1D0A;
    --dark_green: #020C01;
    --light_green: #8EDE86;
    --black: #202020;
    --white: #f9f9f9;
  }
  body{
    
  }
  
  
  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }
`;
