import styled from 'styled-components';
import useStore from '../hooks/useStore';
import Link from 'next/link';
import { ButtonM, ButtonL } from './Buttons';
import NavWrapper from './NavWrapper';

export default function Nav() {
  const SubTotalPrice = useStore(state => state.totals.SubTotalPrice);
  const TotalQuantity = useStore(state => state.totals.TotalQuantity);

  return (
    <NavWrapper>
      <Link passHref href="/checkout">
        <ButtonM
          background="black"
          textcolor="white"
          disabled={TotalQuantity === 0}
        >
          CHECKOUT
        </ButtonM>
      </Link>
      <div style={{ paddingLeft: '1rem' }}>
        <h3>
          TOTAL PRICE:{' '}
          {SubTotalPrice.toLocaleString('de-DE', {
            style: 'currency',
            currency: 'EUR',
          })}
        </h3>
        <h5>TOTAL PRODUCTS: {TotalQuantity}</h5>
      </div>
    </NavWrapper>
  );
}
