import styled from 'styled-components';
import useStore from '../hooks/useStore';
import { SmallSquareButton } from './Buttons';
import TrashIcon from '../public/trash-icon.svg';

export default function QuantitySelector({ id, quantity }) {
  const setQuantity = useStore(state => state.setQuantity);
  const seller = useStore(state => state.seller);
  const { maxItems } = seller;

  return (
    <QuantityWrapper>
      <SmallSquareButton
        onClick={() => {
          setQuantity(id, 0);
        }}
      >
        <TrashIcon />
      </SmallSquareButton>
      <StyledSelector>
        <StyledQuantityButton
          onClick={() => {
            setQuantity(id, Math.max(quantity - 1, 0));
          }}
        >
          {'-'}
        </StyledQuantityButton>
        <StyledQuantityCounter>{quantity}</StyledQuantityCounter>
        <StyledQuantityButton
          onClick={() => {
            setQuantity(id, Math.min(quantity + 1, maxItems));
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
  border: 1px solid var(--text-middlecolor);
  height: 40px;
`;

const StyledQuantityButton = styled.button`
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 200;
  text-transform: uppercase;
  color: var(--text-middlecolor);
  border-style: none;
  padding: 0 1rem;
`;

const StyledQuantityCounter = styled.span`
  width: 24px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--text-middlecolor);
`;
