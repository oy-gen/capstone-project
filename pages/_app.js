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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--background-color);
    -webkit-font-smoothing: antialiased;  
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    max-width: 800px;
    margin: auto;
  }

h2 {
  color: var(--text-lightcolor);
  padding-bottom: 0.2rem;
  font-size: 1.2rem;
  font-weight: 200;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
};

h3 {
  text-transform: uppercase;
  color: var(--text-maincolor);
  font-weight: 600;
};

p {
  font-family: 'Poppins', sans-serif;
  padding-bottom: 0.6rem;
  color: var(--text-lightcolor);
  font-weight: 200;
  text-align: justify;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
}
`;
