import Link from 'next/link';
import styled from 'styled-components';
import useHydration from '../hooks/useHydration';
import NavWrapper from './NavWrapper';
import { BigButton, SmallButton } from './Buttons';
import { GetTotals } from '../hooks/useCalculation';

export default function Nav() {
  const hydrated = useHydration();
  const { subTotalPrice } = GetTotals();

  return (
    <>
      {hydrated && (
        <NavWrapper>
          <Link passHref href="/">
            <SmallButton />
          </Link>
          <Link passHref href="/address">
            <BigButton disabled={subTotalPrice === 0}>
              <Wrapper>
                PROCEED TO SHIPPING
                <h5>
                  SUBTOTAL:{' '}
                  {subTotalPrice.toLocaleString('de-DE', {
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
