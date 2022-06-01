import styled from 'styled-components';
import useStore from '../hooks/useStore';

export default function QuantitySelector({ id, quantity }) {
  const setQuantity = useStore(state => state.setQuantity);
  const updateTotal = useStore(state => state.updateTotal);
  
  return (
    <QuantityWrapper>
      <StyledRemoveButton
        onClick={() => {
          setQuantity(id, (quantity = 0));
          updateTotal();
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12H14V24H12V12ZM18 12H20V24H18V12Z"
            fill="var(--text-lightcolor)"
          />
          <path
            d="M4 6V8H6V28C6 28.5304 6.21071 29.0391 6.58579 29.4142C6.96086 29.7893 7.46957 30 8 30H24C24.5304 30 25.0391 29.7893 25.4142 29.4142C25.7893 29.0391 26 28.5304 26 28V8H28V6H4ZM8 28V8H24V28H8ZM12 2H20V4H12V2Z"
            fill="var(--text-lightcolor)"
          />
        </svg>
      </StyledRemoveButton>
      <StyledSelector>
        <StyledQuantityButton
          onClick={() => {
            setQuantity(id, Math.max(quantity - 1, 0));
            updateTotal();
          }}
        >
          {'-'}
        </StyledQuantityButton>
        <StyledQuantityCounter>{quantity}</StyledQuantityCounter>
        <StyledQuantityButton
          onClick={() => {
            setQuantity(id, Math.min(quantity + 1, 20));
            updateTotal();
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
  height: 45px;
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

const StyledRemoveButton = styled.button`
  border: 1px solid var(--text-lightcolor);
  height: 45px;
  padding: 0 0.6rem;
  text-transform: uppercase;
  color: var(--text-lightcolor);
  cursor: pointer;
`;
