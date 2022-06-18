import React from 'react';
import useHydration from '../../hooks/useHydration';
import SellersProductCard from '../../components/PricesProductCard';
import useStore from '../../hooks/useStore';
import Link from 'next/link';
import NavWrapper from '../../components/NavWrapper';
import LogoutIcon from '../../public/logout-white.svg';
import SettingsIcon from '../../public/settings2-icon.svg';
import { StyledHeader } from '../../components/Header';
import {
  BigButton,
  SmallButton,
  ContentWrapper,
} from '../../components/Buttons';

export default function Home() {
  const products = useStore(state => state.products);
  const hydrated = useHydration();

  return (
    <>
      {hydrated && (
        <>
          <StyledHeader className="back-office">
            <SettingsIcon />
            <ContentWrapper>
              <h2 className="back-office">B2B BACK-OFFICE</h2>
              <h5>WHOLESALE PRICES</h5>
            </ContentWrapper>
          </StyledHeader>
          {products.map(product => (
            <SellersProductCard key={product.id} product={product} />
          ))}
          <NavWrapper>
            <Link passHref href="/">
              <SmallButton className="back-office">
                <LogoutIcon />
              </SmallButton>
            </Link>
            <Link passHref href="/backoffice/conditions">
              <BigButton>
                <ContentWrapper>
                  PROCEED TO
                  <h5>Order Conditions</h5>
                </ContentWrapper>
              </BigButton>
            </Link>
          </NavWrapper>
        </>
      )}
    </>
  );
}
