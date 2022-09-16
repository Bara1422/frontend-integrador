import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-color: transparent transparent !important;
        scrollbar-width: none;
        transition: scrollbar-color .3s;
        transition: all 0.3s;
    }
    *:not(:hover) {
        scrollbar-color: transparent transparent !important;
    }
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        height: 100vh;
        background-color:#fafaf8;
    }
    h1, h2, h3 {
        font-family: 'Roboto', sans-serif;
    }
    a {
        text-decoration: none
    }
`;