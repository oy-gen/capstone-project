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
  --accent-color: #4B837F;

  --nav-height: 75px;
  --nav-height-mobile:65px;
}
  
 * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;  
    
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background-color);
    font-size: 1rem;
    max-width: 800px;
    margin: var(--nav-height-mobile) auto;
  }
   
  button {
    background-color: var(--background-color);
  }

h2 {
  color: var(--text-maincolor);
  line-height: 1.2rem;
  padding-bottom: 0.2rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
};

h3 {
  text-transform: uppercase;
  color: var(--text-maincolor);
  font-size: 1.2rem;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
}

h4 {
  text-transform: uppercase;
  color: var(--text-lightcolor);
  font-size: 1rem;
  font-weight: 600;
}

h5 {
  color: var(--text-lightcolor);
  font-size: 0.9rem;
  font-weight: 400;
}

p {
  font-family: 'Poppins', sans-serif;
  padding-bottom: 0.6rem;
  color: var(--text-lightcolor);
  font-weight: 300;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
}

a {
color: var(--accent-color);
}
`;
