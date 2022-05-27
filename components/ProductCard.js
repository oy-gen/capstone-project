import styled from 'styled-components';
import QuantitySelector from './QuantitySelector';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const [showDetails, setShowDetails] = useState();

  return (
    <>
      <StyledCard key={product.id}>
        <StyledImage src={product.image} alt={product.name} />
        <InfoWrapperColumn>
          <StyledProductName>{product.name}</StyledProductName>
          <InfoWrapperRow>
            <div>
              <StyledWSPrice>
                WS {product.WSprice.toPrecision(4)} €
              </StyledWSPrice>
              <StyledRRPPrice>
                RRP {product.RRPprice.toPrecision(4)} €
              </StyledRRPPrice>
              <StyledMoreInfo
                type="button"
                key={product.id}
                onClick={() => setShowDetails(!showDetails)}
              >
                More Info
              </StyledMoreInfo>
            </div>
            <QuantitySelector product={product} />
          </InfoWrapperRow>
        </InfoWrapperColumn>
      </StyledCard>
      {showDetails ? (
        <InfoWrapperColumn>
          <div>{product.description}</div>
          <div>Barcode: {product.id}</div>
        </InfoWrapperColumn>
      ) : null}
    </>
  );
}

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid lightgray;
  background-color: var(--background-color);
  padding: 1rem 1rem;
  gap: 1rem;
`;
const InfoWrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoWrapperRow = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

const StyledMoreInfo = styled.p`
  font-family: 'Poppins', sans-serif;
  margin-top: 0.2rem;
  color: var(--text-lightcolor);
  font-size: 14px;
  font-weight: 200;
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 150px;
  @media (max-width: 600px) {
    width: 120px;
  }
`;

const InfoWrapper = styled.p`
  display: flex;
  flex-direction: colu;
  font-family: 'Poppins', sans-serif;
  padding: 1rem 1rem;
  gap: 1rem;
  margin-top: 0.2rem;
  color: var(--text-lightcolor);
  font-size: 14px;
  font-weight: 200;
`;
