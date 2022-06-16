import GlobalStyle from '../components/GlobalStyle';
import { SessionProvider } from 'next-auth/react';
import useHydration from '../hooks/useHydration';
import { useEffect } from 'react';
import useStore from '../hooks/useStore';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const hydrated = useHydration();
  const loadUser = useStore(state => state.loadUser);
  useEffect(() => {
    loadUser();
    // useStore.getState().loadUser()   --> could also be written like this
  }, [loadUser]);

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
