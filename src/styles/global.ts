import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    html{
        @media(max-width:1080px){
            font-size:93.75%;
        }
        @media(max-width:720px){
            font-size:87.5%;
        }
    }
    body{
        background: #f0f0f5 url('/background.svg'); 
        background-repeat: no-repeat;
        background-position: right top;
        background-size: 50%;
        -webkit-font-smoothing:antialiased;
    }
    button{
        cursor: pointer;
        border: 0;
    }
    #root{
        height:100vh;
    }
    a{
        text-decoration:none;
        color: inherit;
    }
`;