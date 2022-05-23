import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,400&display=swap');
  
  html {
  --background-color: #EFEFEF;
  --text-maincolor: #1C1B1B;
  --text-lightcolor: #7E7E7E;
  --signal-color: #F94C43;
}
  
 * {
   _outline: 1px solid #7E7E7E;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--background-color);
    -webkit-font-smoothing: antialiased;  
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin:auto;
  }
`;