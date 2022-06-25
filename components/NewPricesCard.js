import styled from 'styled-components';
import useHydration from '../hooks/useHydration';
import React from 'react';
import { useEffect } from 'react';
import Toast from './Toast';
import { GetWSprice } from '../hooks/useCalculation';
import { ErrorMessage } from '@hookform/error-message';
import { StyledInput } from './FormStyledComponents';

export default function NewPricesCard({
  register,
  setValue,
  errors,
  product,
  index,
}) {
  const hydrated = useHydration();
  const { id, name, RRPprice, image } = product;
  const WSprice = GetWSprice(id);

  useEffect(() => {
    setValue(`${index}.id`, id);
  });

  return (
    <>
      {hydrated && (
        <>
          <StyledRow>
            <StyledImage src={image} alt={name} />
            <InfoWrapper>
              <h3>{name}</h3>
            </InfoWrapper>
            <GridColumnWrapper>
              <h4 className="back-office">
                <strong>
                  RRP:{' '}
                  {RRPprice.toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                  })}
                </strong>
              </h4>
              <p className="back-office">WS price:</p>
              <InputWrapper>
                <StyledInput
                  className="back-office"
                  pattern="^\d*(\.\d{0,2})?$"
                  {...register(`${index}.WSprice`, {
                    required: 'required input',
                  })}
                  placeholder="new price"
                  defaultValue={WSprice}
                />
                <WarningWrapper>
                  <ErrorMessage
                    errors={errors}
                    name={`${index}.WSprice`}
                    render={({ message }) => (
                      <Toast className="prices-on" message={message} />
                    )}
                  />
                </WarningWrapper>
              </InputWrapper>
            </GridColumnWrapper>
          </StyledRow>
        </>
      )}
    </>
  );
}

const StyledRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1fr 1.21fr;
  background-color: var(--background-darkcolor);
  padding: 0.6rem 0.6rem 0.6rem 0;
  border-top: 1px solid var(--gray-translucent);
  align-items: center;
  gap: 0.6rem;
`;

const WarningWrapper = styled.div`
  position: absolute;
  _outline: 1px solid red;
  margin-bottom: 95px;
  left: -2px;
  width: 144px;
`;

const InputWrapper = styled.div`
  width: 140px;
  _outline: 1px solid red;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  grid-column: 3/4;
`;

const InfoWrapper = styled.div`
  grid-column: 2/3;
`;

const GridColumnWrapper = styled.div`
  grid-column: 3/4;
`;

const StyledImage = styled.img`
  grid-column: 1 / 2;
  opacity: 0.9;
  width: 100%;
`;
