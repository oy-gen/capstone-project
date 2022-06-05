import useStore from '../hooks/useStore';
import Link from 'next/link';
import { Button } from './Buttons';
import NavWrapper from './NavWrapper';
import styled from 'styled-components';

export default function Nav() {
  const SubTotalPrice = useStore(state => state.totals.SubTotalPrice);
  const TotalQuantity = useStore(state => state.totals.TotalQuantity);

  return (
    <NavWrapper>
      <Link passHref href="/checkout">
        <Button
          gridcolumn="1/2"
          background="var(--text-maincolor)"
          textcolor="white"
          disabled={TotalQuantity === 0}
        >
          PROCEED
        </Button>
      </Link>
      <Wrapper>
        <h3>
          SUBTOTAL:{' '}
          {SubTotalPrice.toLocaleString('de-DE', {
            style: 'currency',
            currency: 'EUR',
          })}
        </h3>
        <h5>TOTAL PRODUCTS: {TotalQuantity}</h5>
      </Wrapper>
    </NavWrapper>
  );
}

const Wrapper = styled.div`
padding-left: 16px;
align-self: center;
`
