import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';
import styled from 'styled-components';
import Link from 'next/link';
import { Checkbox } from '@mui/material';
import NavWrapper from './NavWrapper';
import IconLeft from '../public/icon-left.svg';
import { BigButton, SmallButton, ContentWrapper } from './Buttons';
import { GetTotals } from '../hooks/useCalculation';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaAddress } from './FormValidation';
import ShippingAddress from './FormShippingAddress';
import {
  StyledWarning,
  StyledInput,
  StyledHeadline,
} from './FormStyledComponents';

export default function AddressForm() {
  const { subTotalPrice } = GetTotals();
  const hydrated = useHydration();
  const router = useRouter();
  const setUserData = useStore(state => state.setUserData);
  const schema = SchemaAddress;
  const user = useStore(state => state.user);

  const {
    localPickup,
    billingFirstName,
    billingLastName,
    billingCompany,
    billingStreetAndNumber,
    billingOptionalLine,
    billingZip,
    billingCity,
    billingCountry,
  } = user;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    setUserData(data);
    router.push('/checkout');
  };
  const showCheckbox = watch('localPickup', false);
  const showShippingAddress = watch('differentShipping', false);

  return (
    <>
      {hydrated && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormWrapper>
            <StyledHeadline>
              {showShippingAddress
                ? 'Billing Address'
                : 'Billing & Shipping Address'}
            </StyledHeadline>

            <div>
              <StyledInput
                placeholder="First Name*"
                defaultValue={billingFirstName}
                {...register('billingFirstName')}
              />
              <StyledWarning>{errors?.billingFirstName?.message}</StyledWarning>

              <StyledInput
                placeholder="Last Name*"
                defaultValue={billingLastName}
                {...register('billingLastName')}
              />
              <StyledWarning>{errors?.billingLastName?.message}</StyledWarning>
              <StyledInput
                placeholder="Company"
                defaultValue={billingCompany}
                {...register('billingCompany')}
              />
              <StyledWarning>{errors?.billingCompany?.message}</StyledWarning>

              <StyledInput
                placeholder="Optional line"
                defaultValue={billingOptionalLine}
                {...register('billingOptionalLine')}
              />
              <StyledWarning>
                {errors?.billingOptionalLine?.message}
              </StyledWarning>

              <StyledInput
                placeholder="Street and number*"
                defaultValue={billingStreetAndNumber}
                {...register('billingStreetAndNumber')}
              />
              <StyledWarning>
                {errors?.billingStreetAndNumber?.message}
              </StyledWarning>

              <StyledInput
                placeholder="ZIP*"
                defaultValue={billingZip}
                {...register('billingZip')}
              />
              <StyledWarning>{errors?.billingZip?.message}</StyledWarning>

              <StyledInput
                placeholder="City*"
                defaultValue={billingCity}
                {...register('billingCity')}
              />
              <StyledWarning>{errors?.billingCity?.message}</StyledWarning>

              <StyledInput
                placeholder="Country*"
                defaultValue={billingCountry}
                {...register('billingCountry')}
              />
              <StyledWarning>{errors?.billingCountry?.message}</StyledWarning>
            </div>

            <CheckboxWrapper>
              <Checkbox
                type="checkbox"
                disabled={showShippingAddress}
                defaultChecked={localPickup}
                {...register('localPickup')}
              />

              {showShippingAddress ? (
                <span style={{ color: 'grey' }}>
                  Disable different shipping for local pickup
                </span>
              ) : (
                <span style={{ color: 'var(--text-maincolor)' }}>
                  This is a local pickup order
                </span>
              )}
            </CheckboxWrapper>

            {!showCheckbox && (
              <CheckboxWrapper>
                <Checkbox type="checkbox" {...register('differentShipping')} />
                <span>Use a different shipping address</span>
              </CheckboxWrapper>
            )}

            {showShippingAddress && (
              <div>
                <ShippingAddress register={register} errors={errors} />
              </div>
            )}
          </FormWrapper>
          <NavWrapper>
            <Link passHref href="/shopping">
              <SmallButton>
                <IconLeft />
              </SmallButton>
            </Link>

            <BigButton type="submit">
              <ContentWrapper>
                PROCEED TO Checkout
                <h5>
                  SUBTOTAL:{' '}
                  {subTotalPrice.toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                  })}
                </h5>
              </ContentWrapper>
            </BigButton>
          </NavWrapper>
        </form>
      )}
    </>
  );
}

const FormWrapper = styled.div`
  position: relative;
  padding: 0 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`;
