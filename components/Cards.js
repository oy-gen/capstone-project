import styled, { css } from 'styled-components';
import useStore from '../hooks/useStore';

export default function Cards() {
  const products = useStore(state => state.products);
  const addQuantity = useStore(state => state.addQuantity);
  const subtractQuantity = useStore(state => state.subtractQuantity);
  const removeQuantity = useStore(state => state.removeQuantity);
  return (
    <>
      {products.map(product => (
        <StyledCard key={product.id}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StyledImage src={product.image} alt={product.name} />
            <TextWrapperVertical>
              <StyledProductName>{product.name}</StyledProductName>
              <StyledWSPrice>
                WS {product.WSprice.toPrecision(4)} €
              </StyledWSPrice>
              <StyledRRPPrice>
                RRP {product.RRPprice.toPrecision(4)} €
              </StyledRRPPrice>
            </TextWrapperVertical>
          </div>
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
        </StyledCard>
      ))}
    </>
  );
}
const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  background-color: var(--background-color);
  padding: 1rem 1rem;
  gap: 1rem;
`;

const StyledProductName = styled.h2`
  font-family: 'Poppins', sans-serif;
  color: var(--text-maincolor);
  font-size: 1rem;
  font-weight: 200;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  padding-bottom: 1.2rem;
  @media (max-width: 600px) {
    letter-spacing: 0.4rem;
    font-size: 14px;
  }
`;

const StyledWSPrice = styled.p`
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  padding-bottom: 5px;
  color: var(--text-maincolor);
  font-size: 1rem;
  font-weight: 600;
`;

const StyledRRPPrice = styled.p`
  font-family: 'Poppins', sans-serif;
  color: var(--text-lightcolor);
  font-size: 14px;
  font-weight: 200;
  text-transform: uppercase;
  text-decoration: line-through;
`;

const TextWrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledImage = styled.img`
  width: 150px;
  @media (max-width: 600px) {
    width: 120px;
  }
`;

// ------------------------ Quantitiy Selector Styling ---------------------------

const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  padding: 0 1.2rem 0.2rem;
  cursor: pointer;
`;

const StyledQuantityCounter = styled.span`
  width: 24px;
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
  letter-spacing: 0.6rem;
  text-transform: uppercase;
  text-decoration: underline;
  margin-top: 1.4rem;
  cursor: pointer;
`;
