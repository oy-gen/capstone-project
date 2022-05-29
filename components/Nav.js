import styled from 'styled-components';
import useStore from '../hooks/useStore';

export default function Nav() {
  const products = useStore(state => state.products);
  const TotalPriceUseStore = useStore(state => state.TotalPriceUseStore); // imported all for test reasons


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
          <h4>Total price (noUseStore): {_TotalPriceNett}</h4>
          <h4>Total price (useStore): {TotalPriceUseStore}</h4>
        </NavPriceInfoWrapper>
      </NavBottomWrapper>
    </NavBottom>
  );
}

const NavBottom = styled.div`
  display: flex;
  justify-content: center;
  background-color: white 95%;
  box-shadow: 0px 0px 30px 1rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem;
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 100vw;
`;

const NavBottomWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
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
  grid-column: 2 / 4;
`;

//   const TotalQuantity = products
//     .map(product => product.quantity)
//     .reduce((prev, curr) => prev + curr);
