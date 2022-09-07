import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
            outline: 0;
            box-shadow: 0 0 0 2px #3967e2;
    }
    body{
        background-color: #202024;
        color: #7596f1;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font: 400 1rem 'Roboto', sans-serif;
    }

        body::-webkit-scrollbar {
    width: 12px;              
    }

    body::-webkit-scrollbar-track {
    background: #9f9f9f;     
    }

    body::-webkit-scrollbar-thumb {
    background-color: #2d2d2d;
    border-radius: 20px;
    }
`

// .color1 { #3967e2 };
// .color2 { #577ee9 };
// .color3 { #7596f1 };
// .color4 { #92adf8 };
// .color5 { #b0c4ff };