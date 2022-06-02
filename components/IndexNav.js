import useStore from '../hooks/useStore';
import Link from 'next/link';
import { Button } from './Buttons';
import NavWrapper from './NavWrapper';

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
          CHECKOUT
        </Button>
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
