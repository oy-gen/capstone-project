import { useRouter } from 'next/router';
import styled from 'styled-components';
import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';
import { useForm } from 'react-hook-form';
import { Checkbox } from '@mui/material';
import Link from 'next/link';
import NavWrapper from './NavWrapper';
import IconLeft from '../public/icon-left.svg';
import { BigButton, SmallButton } from './Buttons';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import FormValidation from './FormValidation';
import { GetSubTotal } from './Calculations';

export default function AddressForm() {
  const totals = useStore(state => state.totals);
  const subTotal = GetSubTotal();
  const updateTotal = useStore(state => state.updateTotal);
  const hydrated = useHydration();
  const router = useRouter();
  const setBuyerData = useStore(state => state.setBuyerData);
  const schema = FormValidation;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    setBuyerData(data);
    updateTotal();
    router.push('/checkout');
  };
  const showCheckbox = watch('LocalPickup', false);
  const showShippingAddress = watch('DifferentShipping', false);

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
                {...register('BillingFirstName')}
              />
              <StyledWarning>{errors?.BillingFirstName?.message}</StyledWarning>

              <StyledInput
                placeholder="Last Name*"
                {...register('BillingLastName')}
              />
              <StyledWarning>{errors?.BillingLastName?.message}</StyledWarning>

              <StyledInput
                type="text"
                placeholder="Email*"
                {...register('BuyerEmail')}
              />
              <StyledWarning>{errors?.BuyerEmail?.message}</StyledWarning>
              <StyledInput
                placeholder="Company"
                {...register('BillingCompany')}
              />
              <StyledWarning>{errors?.BillingCompany?.message}</StyledWarning>

              <StyledInput
                placeholder="Optional line"
                {...register('BillingOptionalLine')}
              />
              <StyledWarning>
                {errors?.BillingOptionalLine?.message}
              </StyledWarning>

              <StyledInput
                placeholder="Street and number*"
                {...register('BillingStreetAndNumber')}
              />
              <StyledWarning>
                {errors?.BillingStreetAndNumber?.message}
              </StyledWarning>

              <StyledInput placeholder="ZIP*" {...register('BillingZip')} />
              <StyledWarning>{errors?.BillingZip?.message}</StyledWarning>

              <StyledInput placeholder="City*" {...register('BillingCity')} />

              <StyledWarning>{errors?.BillingCity?.message}</StyledWarning>

              <StyledInput
                placeholder="Country*"
                {...register('BillingCountry')}
              />
              <StyledWarning>{errors?.BillingCountry?.message}</StyledWarning>
            </div>

            <CheckboxWrapper>
              <Checkbox
                type="checkbox"
                disabled={showShippingAddress}
                {...register('LocalPickup')}
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
                <Checkbox type="checkbox" {...register('DifferentShipping')} />
                <span>Use a different shipping address</span>
              </CheckboxWrapper>
            )}

            {showShippingAddress && (
              <div>
                <StyledInput
                  placeholder="First Name*"
                  {...register('ShippingFirstName')}
                />
                <StyledWarning>
                  {errors?.ShippingFirstName?.message}
                </StyledWarning>

                <StyledInput
                  placeholder="Last Name*"
                  {...register('ShippingLastName')}
                />
                <StyledWarning>
                  {errors?.ShippingLastName?.message}
                </StyledWarning>

                <StyledInput
                  placeholder="Company"
                  {...register('ShippingCompany')}
                />
                <StyledWarning>
                  {errors?.ShippingCompany?.message}
                </StyledWarning>

                <StyledInput
                  placeholder="Optional line"
                  {...register('ShippingOptionalLine')}
                />
                <StyledWarning>
                  {errors?.ShippingOptionalLine?.message}
                </StyledWarning>

                <StyledInput
                  placeholder="Street and number*"
                  {...register('ShippingStreetAndNumber')}
                />
                <StyledWarning>
                  {errors?.ShippingStreetAndNumber?.message}
                </StyledWarning>

                <StyledInput placeholder="ZIP*" {...register('ShippingZip')} />
                <StyledWarning>{errors?.ShippingZip?.message}</StyledWarning>

                <StyledInput
                  placeholder="City*"
                  {...register('ShippingCity')}
                />

                <StyledWarning>{errors?.ShippingCity?.message}</StyledWarning>

                <StyledInput
                  placeholder="Country*"
                  {...register('ShippingCountry')}
                />
                <StyledWarning>
                  {errors?.ShippingCountry?.message}
                </StyledWarning>
              </div>
            )}
          </FormWrapper>
          <NavWrapper>
            <Link passHref href="/">
              <SmallButton>
                <IconLeft />
              </SmallButton>
            </Link>

            <BigButton type="submit">
              <ButtonContentWrapper>
                PROCEED TO Checkout
                <h5>
                  SUBTOTAL:{' '}
                  {subTotal.toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                  })}
                </h5>
              </ButtonContentWrapper>
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

const StyledHeadline = styled.h2`
  text-align: center;
  margin: 30px auto 30px;
`;
const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 1rem;
  line-height: 1.6rem;
  border-style: none;
  background-color: transparent;
  border-bottom: 1px solid lightgrey;
  padding: 5px;
  margin-bottom: 1rem;
  color: var(--text-darkcolor);

  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--text-lightcolor);
  }

  &:focus {
    border-style: none;
    outline: none;
    border-bottom: 2px solid var(--accent-color);
  }
`;

const StyledWarning = styled.p`
  position: absolute;
  color: var(--signal-color);
  margin: -2.7rem 0.9rem 0 0;
  right: 1rem;
`;

const ButtonContentWrapper = styled.div`
  text-align: left;
  justify-self: flex-start;
`;
