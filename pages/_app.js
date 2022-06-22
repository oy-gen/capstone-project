import GlobalStyle from '../components/GlobalStyle';
import useHydration from '../hooks/useHydration';
import { useEffect } from 'react';
import useStore from '../hooks/useStore';
import { teal, blueGrey } from '@mui/material/colors';
import * as React from 'react';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {
  return <ThemeProvider theme={theme}>...</ThemeProvider>;
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const hydrated = useHydration();
  const loadUser = useStore(state => state.loadUser);
  const theme = createTheme({
    palette: {
      primary: {
        main: teal[500],
      },
      secondary: {
        main: blueGrey[500],
      },
    },
  });
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <>
      {hydrated && (
        <ThemeProvider theme={theme}>
          <GlobalStyle></GlobalStyle>
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </>
  );
}

export default MyApp;
