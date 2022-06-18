import SellersHeader from '../../components/SellersHeader';
import React from 'react';
import useHydration from '../../hooks/useHydration';
import SellersProductCard from '../../components/SellersProductCard';

import useStore from '../../hooks/useStore';
import SellersNav from '../../components/SellersNav';
import { BigButton, SmallButton } from '../../components/Buttons';
import Icon from '../public/logout.svg';
import styled from 'styled-components';

export default function Home() {
  const products = useStore(state => state.products);
  const hydrated = useHydration();

  return (
    <>
      {hydrated && (
        <>
          <SellersHeader />
          {products.map(product => (
            <SellersProductCard key={product.id} product={product} />
          ))}
          <SellersNav />
        </>
      )}
    </>
  );
}
