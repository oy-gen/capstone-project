import { useState, useEffect } from 'react';

export default async function getServerSideProps(context) {
  const products = await client.product.fetchQuery({
    first: 25,
    query: 'available_for_sale:true',
  });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
