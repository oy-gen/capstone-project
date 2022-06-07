import Link from 'next/link';
import NavWrapper from './NavWrapper';
import { Button } from './Buttons';
import useStore from '../hooks/useStore';
import * as React from 'react';
import IconLeft from '../public/icon-left.svg';
import styled from 'styled-components';

export default function AddressNav() {
  const totals = useStore(state => state.totals);
  const { TotalShipping} = totals;

  return (
    <>
      <NavWrapper>
        <Link passHref href="/">
          <Button
            background="transparent"
            textcolor="var(--text-maincolor)"
            gridcolumn="1/2"
          >
            <IconLeft width="20px" height="19px" />
          </Button>
        </Link>
        <Link passHref href="/checkout">
          <Button
            type="submit"
            justify="left"
            gridcolumn="2/4"
            background="var(--text-maincolor)"
            textcolor="white"
          >
            <Wrapper>
              PROCEED TO Checkout
              <h5>
                SHIPPING COSTS:{' '}
                {TotalShipping.toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </h5>
            </Wrapper>
          </Button>
        </Link>
      </NavWrapper>
    </>
  );
}

const Wrapper = styled.div`
  text-align: left;
  justify-self: flex-start;
`;
