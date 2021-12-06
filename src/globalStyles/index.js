import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}

body{
    margin:0;
    padding: 0;
    background: #E5E5E5;
    height: 100vh;
    width: 100vw;
}
`;

export default GlobalStyle;
