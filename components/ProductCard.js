import styled from 'styled-components';
import QuantitySelector from './QuantitySelector';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const [showDetails, setShowDetails] = useState();
  const { id, image, name, description, WSprice, RRPprice, quantity } = product;

  return (
    <>
      <StyledCard key={id}>
        <StyledImage src={image} alt="" />
        <TitleWrapper>
          <h2>{name}</h2>
          <h3>
            {WSprice.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'EUR',
            })}
          </h3>
        </TitleWrapper>
        <FlexWrapper>
          <StyledMoreInfoButton
            onClick={() => {
              setShowDetails(!showDetails);
            }}
          >
            {showDetails ? 'Less Info' : 'More Info'}
          </StyledMoreInfoButton>
          <QuantitySelector id={id} quantity={quantity} />
        </FlexWrapper>
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
  display: grid;
  grid-template-columns: 170px 1fr;
  grid-template-rows: 1fr 1fr;
  border-top: 1px solid lightgray;
  gap: 1rem;
  background-color: var(--background-color);
  padding: 1rem;
  @media (max-width: 600px) {
    grid-template-columns: 120px 1fr;
    column-count: 1;
    gap: 0rem;
  }
`;

const TitleWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2 / 3;
  align-self: center;
`;

const FlexWrapper = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  display: flex;
  justify-content: space-between;
  align-self: center;
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
  font-weight: 200;
  padding-right: 10px;
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;
`;

const StyledImage = styled.img`
  grid-row: 1/3;
  grid-column: 1 / 2;
  max-width: 300px;
  width: 100%;
`;
