import styled from 'styled-components';
import useStore from '../hooks/useStore';
import QuantitySelector from './QuantitySelector';

export default function Cards() {
  const products = useStore(state => state.products);

  return (
    <>
      {products.map(product => (
        <StyledCard key={product.id}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StyledImage src={product.image} alt={product.name} />
            <TextWrapper>
              <StyledProductName>{product.name}</StyledProductName>
              <StyledWSPrice>
                WS {product.WSprice.toPrecision(4)} €
              </StyledWSPrice>
              <StyledRRPPrice>
                RRP {product.RRPprice.toPrecision(4)} €
              </StyledRRPPrice>
            </TextWrapper>
          </div>
          <QuantitySelector product={product} />
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

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledImage = styled.img`
  width: 150px;
  @media (max-width: 600px) {
    width: 120px;
  }
`;
