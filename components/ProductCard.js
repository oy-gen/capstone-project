import styled from 'styled-components';
import QuantitySelector from './QuantitySelector';
import { useState } from 'react';
import { SmallSquareButton } from './Buttons';
import InfoIcon from '../public/info-icon.svg'

export default function ProductCard({ product }) {
  const [showDetails, setShowDetails] = useState();
  const { id, image, name, description, WSprice, RRPprice, quantity, sum } =
    product;

  return (
    <>
      <StyledCard key={id}>
        <StyledImage src={image} alt="" />
        <TitleWrapper>
          <h2>{name}</h2>
          <h4>
            WS PRICE:{' '}
            {WSprice.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'EUR',
            })}
            <span style={{ fontWeight: '400', textDecoration: 'line-through' }}>
              {'  '}
              {RRPprice.toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR',
              })}
            </span>
          </h4>
          <FlexWrapper>
            <h5>
              SUM:{' '}
              {sum.toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR',
              })}
            </h5>
            <ButtonWrapper>
              <SmallSquareButton
                onClick={() => {
                  setShowDetails(!showDetails);
                }}
              >
                <InfoIcon/>
              </SmallSquareButton>
              <QuantitySelector id={id} quantity={quantity} />
            </ButtonWrapper>
          </FlexWrapper>
        </TitleWrapper>
      </StyledCard>
      {showDetails && (
        <ExtraInfoWrapper>
          <p>
            <strong>BARCODE: </strong> {id}
          </p>
          <p>{description}</p>
        </ExtraInfoWrapper>
      )}
    </>
  );
}

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  border-top: 1px solid lightgray;
  gap: 1rem;
  background-color: var(--background-color);
  padding: 1rem 1rem 1rem 0;
  align-items: center;
  @media (max-width: 600px) {
    gap: 0rem;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 0.6rem;
`;

const TitleWrapper = styled.div`
  grid-column: 2 / 3;
`;

const FlexWrapper = styled.div`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
`;

const ExtraInfoWrapper = styled.div`
  padding: 1rem;
  column-count: 2;
  max-width: 800px;
  margin: auto;
  @media (max-width: 600px) {
    column-count: 1;
  }
`;

const StyledImage = styled.img`
  grid-column: 1 / 2;
  max-width: 300px;
  width: 100%;
`;
