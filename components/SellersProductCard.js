import styled from 'styled-components';
import useHydration from '../hooks/useHydration';
import { useFullInfo } from '../hooks/useCalculation';
import useStore from '../hooks/useStore';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Toast from './Toast';
import { useState } from 'react';
import Icon from '../public/save-icon.svg';
import { SmallSquareButton } from '../components/Buttons';

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);
  const hydrated = useHydration();
  const { id, name, RRPprice, image } = product;
  const fullInfo = useFullInfo(product.id);
  const setWSprice = useStore(state => state.setWSprice);
  const schema = yup
    .object({
      WSprice: yup
        .string('numbers only')
        .typeError('numbers & dots only')
        .required('required field'),
    })
    .required();

  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    const input = getValues('WSprice');
    const inputToDot = input.replace(',', '.');
    const inputToNumber = parseFloat(inputToDot).toFixed(2);

    setValue('WSprice', inputToNumber);
    setWSprice(inputToNumber);
    console.log(inputToNumber);
    const dataModified = { id, ...data };
  };

  function checkErrors() {
    if (errors) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2500);
    }
  }

  return (
    <>
      {hydrated && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledRow>
              <StyledImage src={image} alt={name} />
              <InfoWrapper>
                <h3>{name}</h3>
                <h4 className="back-office">
                  <strong>
                    RRP:{' '}
                    {RRPprice.toLocaleString('de-DE', {
                      style: 'currency',
                      currency: 'EUR',
                    })}
                  </strong>
                </h4>
              </InfoWrapper>
              <GridColumnWrapper>
                <h5 className="back-office">ID: {id}</h5>
                <p className="back-office">WS price:</p>
                <InputWrapper>
                  <StyledInput
                    key={id}
                    defaultValue={fullInfo.WSprice.toLocaleString('de-DE', {
                      style: 'currency',
                      currency: 'EUR',
                    })}
                    placeholder="new price:"
                    {...register('WSprice')}
                  />
                  <WarningWrapper>
                    {errors.WSprice && open && (
                      <Toast message={errors?.WSprice?.message} />
                    )}
                  </WarningWrapper>
                  <SmallSquareButton
                    className="save-button"
                    onClick={() => {
                      checkErrors();
                      //console.log(prices);
                    }}
                    type="submit"
                  >
                    <Icon />
                  </SmallSquareButton>
                </InputWrapper>
              </GridColumnWrapper>
            </StyledRow>
          </form>
        </>
      )}
    </>
  );
}

const StyledRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1.1fr 1fr;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0.6rem 0.6rem 0.6rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  align-items: center;
  gap: 0.6rem;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  height: 40px;
  width: 90px;
  border-style: none;
  background-color: rgb(0, 0, 0, 0.8);
  border: 2px solid var(--accent-color);
  margin: 5px 0;
  padding: 5px 0;
  color: var(--background-color);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.3);
    font-weight: 200;
  }

  &:focus {
    border-style: none;
    outline: none;
    outline: 4px solid var(--accent-color);
  }
`;

const StyledImage = styled.img`
  grid-column: 1 / 2;
  opacity: 0.9;
  width: 100%;
`;

const InfoWrapper = styled.div`
  grid-column: 2/3;
`;
const GridColumnWrapper = styled.div`
  grid-column: 3/4;
`;

const InputWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 0.6rem;
  grid-column: 3/4;
`;

const WarningWrapper = styled.div`
  position: absolute;
  right: 190px;
  gap: 0.6rem;
  z-index: 10;
`;
