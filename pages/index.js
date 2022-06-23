import Header from '../components/Header';
import React from 'react';
import useHydration from '../hooks/useHydration';
import Login from '../components/Login';
import client from '../lib/Shopify-client';

import useStore from '../hooks/useStore';
import { useEffect } from 'react';
import parseProducts from '../hooks/parseProducts';

export default function Home(props) {
  console.log(props);
  const hydrated = useHydration();
  const setProducts = useStore(state => state.setProducts);
  const newProducts = parseProducts(props.products);

  useEffect(() => {
    setProducts(newProducts);
  });
  console.log(newProducts);

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

export async function getServerSideProps(context) {
  const products = await client.product.fetchQuery({
    query: 'available_for_sale:true',
  });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
