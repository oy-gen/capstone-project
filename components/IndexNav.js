import useStore from '../hooks/useStore';
import Link from 'next/link';
import { Button } from './Buttons';
import NavWrapper from './NavWrapper';
import styled from 'styled-components';
import useHydration from '../hooks/useHydration';

export default function Nav() {
  const hydrated = useHydration();
  const SubTotalPrice = useStore(state => state.totals.SubTotalPrice);
  const TotalQuantity = useStore(state => state.totals.TotalQuantity);

  return (
    <>
      {hydrated && (
        <NavWrapper>
          <Link passHref href="/">
            <Button
              background="transparent"
              textcolor="var(--text-maincolor)"
              gridcolumn="1/2"
            ></Button>
          </Link>
          <Link passHref href="/address">
            <Button
              gridcolumn="2/4"
              justify="left"
              background="var(--text-maincolor)"
              textcolor="white"
              disabled={TotalQuantity === 0}
            >
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
            </Button>
          </Link>
        </NavWrapper>
      )}
      ,
    </>
  );
}

const Wrapper = styled.div`
  text-align: left;
  align-self: center;
  justify-self: flex-start;
`;
