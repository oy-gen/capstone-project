import styled from 'styled-components';
import useStore from '../hooks/useStore';

export default function QuantitySelector({ product }) {
  const addQuantity = useStore(state => state.addQuantity);
  const subtractQuantity = useStore(state => state.subtractQuantity);
  const removeQuantity = useStore(state => state.removeQuantity);

  return (
    <QuantityWrapper>
      <StyledSelector>
        <StyledQuantityButton
          type="button"
          onClick={() => {
            subtractQuantity(product.id);
          }}
        >
          {'-'}
        </StyledQuantityButton>
        <StyledQuantityCounter>{product.quantity}</StyledQuantityCounter>
        <StyledQuantityButton
          type="button"
          onClick={() => {
            addQuantity(product.id);
          }}
        >
          {'+'}
        </StyledQuantityButton>
      </StyledSelector>
      <StyledRemoveButton
        type="button"
        onClick={() => {
          removeQuantity(product.id);
        }}
      >
        remove
      </StyledRemoveButton>
    </QuantityWrapper>
  );
}

const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSelector = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  height: 45px;
`;

const StyledQuantityButton = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 200;
  text-transform: uppercase;
  color: var(--text-lightcolor);
  border-style: none;
  padding: 0 1rem 0.2rem;
  cursor: pointer;
`;

const StyledQuantityCounter = styled.span`
  width: 25px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 200;
  text-transform: uppercase;
  color: var(--text-lightcolor);
`;

const StyledRemoveButton = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 200;
  text-transform: uppercase;
  color: var(--text-lightcolor);
  border-style: none;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  text-decoration: underline;
  margin-top: 1rem;
  cursor: pointer;
`;
