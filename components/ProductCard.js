import styled from 'styled-components';
import QuantitySelector from './QuantitySelector';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const [showDetails, setShowDetails] = useState();
  const { id, image, name, description, WSprice, RRPprice, quantity } = product;

  return (
    <>
      <StyledCard key={id}>
        <StyledImage src={image} alt={name} />
        <MainInfoWrapper>
          <h2>{name}</h2>
          <h3>
            {WSprice.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'EUR',
            })}
          </h3>
          <FlexWrepper>
            <StyledMoreInfoButton
              type="button"
              key={id}
              onClick={() => {
                setShowDetails(!showDetails);
              }}
            >
              {showDetails ? 'Less Info' : 'More Info'}
            </StyledMoreInfoButton>
            <QuantitySelector id={id} quantity={quantity} />
          </FlexWrepper>
        </MainInfoWrapper>
      </StyledCard>
      {showDetails && (
        <ExtraInfoWrapper>
          <p>
            <p>{description}</p>
            <strong>RRP: </strong>
            {RRPprice.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'EUR',
            })}
            <br /> <strong>BARCODE: </strong> {id}
          </p>
        </ExtraInfoWrapper>
      )}
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
`;

const FlexWrepper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExtraInfoWrapper = styled.div`
  padding: 1rem;
  column-count: 2;
  max-width: 1000px;
  margin: auto;
  @media (max-width: 600px) {
    column-count: 1;
  }
`;

const StyledMoreInfoButton = styled.button`
  color: var(--text-lightcolor);
  border-style: none;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 200;
  padding-right: 10px;
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
