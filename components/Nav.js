import styled from 'styled-components';
import useStore from '../hooks/useStore';

export default function Nav() {
  const products = useStore(state => state.products);
  const TotalPrice = useStore(state => state.TotalPrice);
  const TotalQuantity = useStore(state => state.TotalQuantity);

  const _TotalPriceNett = products //this is the total price without useStore, it works!
    .map(product => product.sum)
    .reduce((prev, curr) => prev + curr)
    .toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR',
    });

  return (
    <NavBottom>
      <NavBottomWrapper>
        <Button>Proceed to Checkout</Button>
        <NavPriceInfoWrapper>
          <h3>
            TOTAL:{' '}
            {TotalPrice.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'EUR',
            })}
          </h3>
          <h5>total products: {TotalQuantity}</h5>
        </NavPriceInfoWrapper>
      </NavBottomWrapper>
    </NavBottom>
  );
}

const NavBottom = styled.div`
  display: flex;
  justify-content: center;
  background-color: white 95%;
  box-shadow: 0px 0px 2rem 1rem rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  padding: 1rem;
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 100vw;
`;

const NavBottomWrapper = styled.div`
  display: grid;
  align-items: center;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  max-width: 800px;
`;

const Button = styled.button`
  padding: 1rem 0;
  grid-column: 1 / 2;
  background-color: black;
  border-style: none;
  text-align: left;
  text-decoration: none;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  padding: 1rem;
`;

const NavPriceInfoWrapper = styled.div`
  grid-column: 2 / 3;
`;

//   const TotalQuantity = products
//     .map(product => product.quantity)
//     .reduce((prev, curr) => prev + curr);
