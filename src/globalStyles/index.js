import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --seek-width: 0;
    --primary: linear-gradient(327.56deg, #5d24d6 19.23%, #7e74ed 81.76%); 
}

*{
    box-sizing: border-box;
}

body{
    margin:0;
    padding: 0;
    background: #E5E5E5;
    color: #C7C5D0;
    // font-family: 'Montserrat', sans-serif;
    font-family: 'Roboto', sans-serif;

    p {
        font-size: 10.5px;
        padding-top: 6px;
      }
}`;

export default GlobalStyle;
