import Header from '../components/Header';
import React from 'react';
import useHydration from '../hooks/useHydration';
import SellersProductCard from '../components/SellersProductCard';
import { StyledHeadline } from '../components/FormStyledComponents';
import useStore from '../hooks/useStore';
import NavWrapper from '../components/NavWrapper';
import { BigButton, SmallButton } from '../components/Buttons';
import Icon from '../public/logout.svg';

export default function Home() {
  const products = useStore(state => state.products);
  const hydrated = useHydration();

  return (
    <>
      {hydrated && (
        <>
          <Header />
          <StyledHeadline>Wholesale prices</StyledHeadline>
          {products.map(product => (
            <SellersProductCard key={product.id} product={product} />
          ))}
          <NavWrapper>
            <SmallButton>
              <Icon />
            </SmallButton>
            <BigButton>save and PROCEED</BigButton>
          </NavWrapper>
        </>
      )}
    </>
  );
}
