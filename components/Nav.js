import styled from 'styled-components';
import useStore from '../hooks/useStore';

export default function Nav() {
  const TotalPrice = useStore(state => state.TotalPrice);
  const TotalQuantity = useStore(state => state.TotalQuantity);

  return (
    <NavBottom>
      <NavElementWrapper>
        <Button>Checkout</Button>
        <div>
          <h3>
            TOTAL PRICE:{' '}
            {TotalPrice.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'EUR',
            })}
          </h3>
          <h5>total products: {TotalQuantity}</h5>
        </div>
      </NavElementWrapper>
    </NavBottom>
  );
}

const NavBottom = styled.nav`
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 2rem 1rem rgba(0, 0, 0, 0.25);
  position: fixed;
  bottom: -3px;
  right: 0px;
  width: 100vw;
  height: var(--nav-height);
  @supports (backdrop-filter: blur(7px)) {
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(7px);
  }
  @media (max-width: 600px) {
    height: var(--nav-height-mobile);
  }
`;

const NavElementWrapper = styled.div`
  display: grid;
  align-items: center;
  gap: 1.6rem;
  grid-template-columns: 1fr 1fr;
  width: 800px;
  @media (max-width: 600px) {
    grid-template-columns: 136px 1fr;
    gap: 1rem;
  }
`;

const Button = styled.button`
  background-color: black;
  border-style: none;
  font-size: 1rem;
  text-decoration: none;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  height: 100%;
  width: 100%;
`;
