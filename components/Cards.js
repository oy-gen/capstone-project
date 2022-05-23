import styled, { css } from 'styled-components';
import useStore from '../hooks/useStore';
import RoundNumberToTwo from '../components/RoundNumberToTwo';

export default function Cards() {
  const products = useStore(state => state.products);
  return (
    <>
      {products.map(product => (
        <StyledCard key={product.id}>
          <StyledImage src={product.image} alt={product.name} />
          <TextWrapperVertical>
            <StyledProductName>{product.name}</StyledProductName>
            <StyledWSPrice>
              WS {RoundNumberToTwo(product.b2bnett)} €
            </StyledWSPrice>
            <StyledRRPPrice>
              RRP {RoundNumberToTwo(product.b2cgross)} €
            </StyledRRPPrice>
          </TextWrapperVertical>
        </StyledCard>
      ))}
    </>
  );
}

const StyledCard = styled.div`
  display: flex;
  align-items: center;
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
