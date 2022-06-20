import React from 'react';
import useHydration from '../hooks/useHydration';
import Header from '../components/Header';
import NewPrices from '../components/NewPrices';

export default function Home() {
  const hydrated = useHydration();

  return (
    <section>
      {hydrated && (
        <>
          <Header />
          <NewPrices />
        </>
      )}
    </section>
  );
}
