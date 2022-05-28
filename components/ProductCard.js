import styled from 'styled-components';
import QuantitySelector from './QuantitySelector';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const [showDetails, setShowDetails] = useState();

  return (
    <>
      <StyledCard key={product.id}>
        <StyledImage src={product.image} alt={product.name} />
        <MainInfoWrapper>
          <StyledProductName>{product.name}</StyledProductName>
          <StyledWSPrice>WS {product.WSprice.toPrecision(4)} €</StyledWSPrice>
          <MainInfoWrapperRow>
            <StyledMoreInfoButton
              type="button"
              key={product.id}
              onClick={() => {
                setShowDetails(!showDetails);
              }}
            >
              {showDetails ? 'Less Info' : 'More Info'}
            </StyledMoreInfoButton>
            <QuantitySelector product={product} />
          </MainInfoWrapperRow>
        </MainInfoWrapper>
      </StyledCard>
      {showDetails ? (
        <ExtraInfoWrapper>
          <StyledExtraInfo>
            <strong>RRP: </strong> {product.RRPprice.toPrecision(4)} €
            <br /> <strong>BARCODE:</strong> {product.id}
          </StyledExtraInfo>
          <StyledExtraInfo>{product.description}</StyledExtraInfo>
        </ExtraInfoWrapper>
      ) : null}
    </>
  );
}

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid lightgray;
  background-color: var(--background-color);
  padding: 0.8rem;
`;
const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  gap: 0.6rem;
  padding-left: 0.6rem;
`;

const MainInfoWrapperRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExtraInfoWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  max-width: 600px;
  margin: auto;
`;

const StyledProductName = styled.h2`
  font-family: 'Poppins', sans-serif;
  color: var(--text-maincolor);
  font-size: 1rem;
  font-weight: 200;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const StyledWSPrice = styled.h3`
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  color: var(--text-maincolor);
  font-size: 1rem;
  font-weight: 600;
`;

const StyledExtraInfo = styled.p`
  font-family: 'Poppins', sans-serif;
  padding-bottom: 0.4rem;
  color: var(--text-lightcolor);
  font-size: 14px;
  font-weight: 200;
  text-align: justify;
`;

const StyledMoreInfoButton = styled.span`
  font-family: 'Poppins', sans-serif;
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
