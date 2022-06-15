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

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);
  const hydrated = useHydration();
  const { id, name, RRPprice, image } = product;
  const fullInfo = useFullInfo(product.id);
  const prices = useStore(state => state.prices);

  const setWSprice = useStore(state => state.setWSprice);
  const schema = yup
    .object({
      WSprice: yup
        .number('numbers only')
        .typeError('numbers & dots only')
        .required('required'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    const dataModified = { id, ...data };
    setWSprice(dataModified);
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
                <p>BARCODE: {id}</p>
              </InfoWrapper>
              <InputWrapper>
                <h4>
                  RRP:{' '}
                  {RRPprice.toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                  })}
                </h4>

                <StyledInput
                  key={id}
                  defaultValue={fullInfo.WSprice.toFixed(2)}
                  placeholder="new price"
                  {...register('WSprice')}
                />

                <ButtonSubmit
                  onClick={() => {
                    checkErrors();
                    console.log(prices);
                  }}
                  type="submit"
                >
                  SAVE
                </ButtonSubmit>
              </InputWrapper>
              <WarningWrapper>
                {errors.WSprice && open && (
                  <Toast message={errors?.WSprice?.message} />
                )}
              </WarningWrapper>
            </StyledRow>
          </form>
        </>
      )}
    </>
  );
}
const WarningWrapper = styled.div`
  position: absolute;
  flex-wrap: nowrap;
  padding-top: 0.6rem;
  gap: 0.6rem;
`;

const ButtonSubmit = styled.button`
  grid-column: 3/4;
  padding: 5px;
  border-style: groove;

  :active {
    background-color: var(--accent-color);
    color: white;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.6rem;
  border-style: none;
  background-color: rgb(80, 107, 204, 0.2);
  border-bottom: 2px solid var(--accent-color);
  margin: 5px 0;
  padding: 5px 0;
  color: var(--accent-color);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgb(80, 107, 204, 0.6);
    font-weight: 200;
  }

  &:focus {
    border-style: none;
    outline: none;
    border-bottom: 2px solid transparent;
    outline: 2px solid var(--accent-color);
  }
`;

const StyledRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr 0.8fr;
  padding: 0.4rem 1rem 0.4rem;
  border-top: 1px solid lightgray;
  background-color: var(--background-color);
  align-items: center;
`;
const StyledImage = styled.img`
  grid-column: 1 / 2;
  width: 100%;
`;

const InfoWrapper = styled.div`
  padding-right: 1rem;
  grid-column: 2/3;
`;
const InputWrapper = styled.div`
  grid-column: 3/4;
`;
