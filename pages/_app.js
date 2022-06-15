import GlobalStyle from '../components/GlobalStyle';
import { SessionProvider } from 'next-auth/react';
import useHydration from '../hooks/useHydration';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const hydrated = useHydration();

  return (
    <>
      {hydrated && (
        <SessionProvider session={session}>
          <GlobalStyle></GlobalStyle>
          <Component {...pageProps} />
        </SessionProvider>
      )}
    </>
  );
}

export default MyApp;

