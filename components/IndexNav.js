import useStore from '../hooks/useStore';
import Link from 'next/link';
import styled from 'styled-components';
import useHydration from '../hooks/useHydration';
import NavWrapper from './NavWrapper';
import { BigButton, SmallButton } from './Buttons';
import {GetSubTotal} from './Calculations';

export default function Nav() {
  const hydrated = useHydration();
  const subTotal = GetSubTotal();

  return (
    <>
      {hydrated && (
        <NavWrapper>
          <Link passHref href="/">
            <SmallButton />
          </Link>
          <Link passHref href="/address">
            <BigButton disabled={subTotal === 0}>
              <Wrapper>
                PROCEED TO SHIPPING
                <h5>
                  SUBTOTAL:{' '}
                  {subTotal.toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                  })}
                </h5>
              </Wrapper>
            </BigButton>
          </Link>
        </NavWrapper>
      )}
      ,
    </>
  );
}

const Wrapper = styled.div`
  align-self: center;
  justify-self: flex-start;
`;
