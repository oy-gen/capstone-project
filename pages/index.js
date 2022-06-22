import Header from '../components/Header';
import React from 'react';
import useHydration from '../hooks/useHydration';
import Login from '../components/Login';
import client from '../lib/Shopify-client';

export default function Home(props) {
  const hydrated = useHydration();
  console.log(props);
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

export const getServerSideProps = async context => {
  const products = await client.product.fetchAll(); // Fetch product
  const infos = await client.shop.fetchInfo(); // Fetch shop Info if you think about SEO and title and ... to your page
  const policies = await client.shop.fetchPolicies(); // fetch shop policy if you have any
  return {
    props: {
      infos: JSON.parse(JSON.stringify(infos)),
      policies: JSON.parse(JSON.stringify(policies)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};
