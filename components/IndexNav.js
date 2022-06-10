import useStore from '../hooks/useStore';
import Link from 'next/link';
import styled from 'styled-components';
import useHydration from '../hooks/useHydration';
import NavWrapper from './NavWrapper';
import { BigButton, SmallButton } from './Buttons';

export default function Nav() {
  const hydrated = useHydration();
  const SubTotalPrice = useStore(state => state.totals.SubTotalPrice);
  const TotalQuantity = useStore(state => state.totals.TotalQuantity);

  return (
    <>
      {hydrated && (
        <NavWrapper>
          <Link passHref href="/">
            <SmallButton />
          </Link>
          <Link passHref href="/address">
            <BigButton disabled={TotalQuantity === 0}>
              <Wrapper>
                PROCEED TO SHIPPING
                <h5>
                  SUBTOTAL:{' '}
                  {SubTotalPrice.toLocaleString('de-DE', {
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
