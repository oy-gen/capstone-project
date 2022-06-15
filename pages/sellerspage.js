import Header from '../components/Header';
import React from 'react';
import useHydration from '../hooks/useHydration';
import Login from '../components/Login';

export default function Home() {
  const hydrated = useHydration();

  return (
    <>
      {hydrated && (
        <>
          <Header />
          <Login />
        </>
      )}
    </>
  );
}
