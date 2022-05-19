import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  
  html {
  --background-color: #EFEFEF;
  --text-maincolor: #1C1B1B;
  --text-lightcolor: #7E7E7E;
  --signal-color: #F94C43;
  
}
  
  
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--background-color);
    -webkit-font-smoothing: antialiased;  
  }




`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};
