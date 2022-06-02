import styled from 'styled-components';
import QuantitySelector from './QuantitySelector';
import { useState } from 'react';
import { SmallSquareButton } from './Buttons';

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
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 178 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29 124H93V296"
                    stroke="var(--text-lightcolor)"
                    strokeWidth="25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 300H158"
                    stroke="var(--text-lightcolor)"
                    strokeWidth="25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M89 64C82.671 64 76.4841 62.1232 71.2218 58.607C65.9594 55.0908 61.8579 50.0931 59.4359 44.2459C57.0139 38.3986 56.3802 31.9645 57.6149 25.7571C58.8496 19.5497 61.8973 13.8479 66.3726 9.3726C70.8479 4.89732 76.5497 1.84961 82.7571 0.614885C88.9645 -0.619842 95.3987 0.013865 101.246 2.43587C107.093 4.85787 112.091 8.9594 115.607 14.2218C119.123 19.4841 121 25.671 121 32C121 40.4869 117.629 48.6263 111.627 54.6274C105.626 60.6286 97.4869 64 89 64Z"
                    fill="var(--text-lightcolor)"
                  />
                </svg>
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
  grid-template-columns: 1fr 2fr;
  border-top: 1px solid lightgray;
  gap: 1rem;
  background-color: var(--background-color);
  padding: 1rem 1rem 1rem 0;
  align-items: center;
  @media (max-width: 600px) {
    grid-template-columns: 1.2fr 2fr;
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
