import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Rosario', sans-serif;
        background-color: #f0f0f0;
        color: #333;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
