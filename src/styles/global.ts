import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

     *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Montserrat', sans-serif;
     }

     body{
          width: 100%;
          height: 100vh;
          background-color: ${(props) => props.theme['gray-bg']};
          -webkit-font-smoothing: antialiased;
     }

`
