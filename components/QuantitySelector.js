import styled from 'styled-components';
import useStore from '../hooks/useStore';

export default function QuantitySelector({ product }) {
  const quantity = useStore(state => state.quantity);
  const addQuantity = useStore(state => state.addQuantity);
  const subtractQuantity = useStore(state => state.subtractQuantity);

  return (
    <StyledSelector>
      <StyledQuantityButton
        type="button"
        onClick={() => {
          subtractQuantity(quantity);
        }}
      >
        {'-'}
      </StyledQuantityButton>
      <StyledQuantityCounter>{quantity}</StyledQuantityCounter>
      <StyledQuantityButton
        type="button"
        onClick={() => {
          addQuantity();
        }}
      >
        {'+'}
      </StyledQuantityButton>
    </StyledSelector>
  );
}

const StyledSelector = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  height: 50px;
`;

const StyledQuantityButton = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 200;
  text-transform: uppercase;
  color: var(--text-lightcolor);
  border-style: none;
  padding: 0 1rem;
`;

const StyledQuantityCounter = styled.span`
  width: 30px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 200;
  text-transform: uppercase;
  color: var(--text-lightcolor);
`;
