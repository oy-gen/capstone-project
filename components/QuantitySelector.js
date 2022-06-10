import styled from 'styled-components';
import useStore from '../hooks/useStore';
import { SmallSquareButton } from './Buttons';
import TrashIcon from '../public/trash-icon.svg';
import { useEffect } from 'react';

export default function QuantitySelector({ id }) {
  const setQuantity = useStore(state => state.setQuantity);
  const updateTotal = useStore(state => state.updateTotal);
  const productsInCart = useStore(state => state.CART);
  const currentProduct = productsInCart.find(product => product.id === id);
  const quantity = currentProduct?.quantity ?? 0;

  useEffect(()=>{
console.log(productsInCart);
  },[productsInCart])

  return (
    <QuantityWrapper>
      <SmallSquareButton
        onClick={() => {
          setQuantity(id, 0);
          // updateTotal();
        }}
      >
        <TrashIcon />
      </SmallSquareButton>
      <StyledSelector>
        <StyledQuantityButton
          onClick={() => {
            setQuantity(id, Math.max(quantity - 1, 0));
            // updateTotal();
          }}
        >
          {'-'}
        </StyledQuantityButton>
        <StyledQuantityCounter>{quantity}</StyledQuantityCounter>
        <StyledQuantityButton
          onClick={() => {
            setQuantity(id, Math.min(quantity + 1, 20));
            // updateTotal();
          }}
        >
          {'+'}
        </StyledQuantityButton>
      </StyledSelector>
    </QuantityWrapper>
  );
}

const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`;

const StyledSelector = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--text-lightcolor);
  height: 40px;
`;

const StyledQuantityButton = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 200;
  text-transform: uppercase;
  color: var(--text-lightcolor);
  border-style: none;
  padding: 0 1rem;
  cursor: pointer;
`;

const StyledQuantityCounter = styled.span`
  width: 24px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--text-lightcolor);
`;
