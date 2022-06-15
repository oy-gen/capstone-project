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
import { BigButton, SmallButton } from './Buttons';
import { GetTotals } from '../hooks/useCalculation';
import { yupResolver } from '@hookform/resolvers/yup';
import FormValidation from './FormValidation';
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
  const setBuyerData = useStore(state => state.setBuyerData);
  const schema = FormValidation;
  const buyer = useStore(state => state.buyer);

  const {
    BuyerEmail,
    LocalPickup,
    BillingFirstName,
    BillingLastName,
    BillingCompany,
    BillingStreetAndNumber,
    BillingOptionalLine,
    BillingZip,
    BillingCity,
    BillingCountry,
  } = buyer;

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
                defaultValue={BillingFirstName}
                {...register('BillingFirstName')}
              />
              <StyledWarning>{errors?.BillingFirstName?.message}</StyledWarning>

              <StyledInput
                placeholder="Last Name*"
                defaultValue={BillingLastName}
                {...register('BillingLastName')}
              />
              <StyledWarning>{errors?.BillingLastName?.message}</StyledWarning>
              <StyledInput
                placeholder="Company"
                defaultValue={BillingCompany}
                {...register('BillingCompany')}
              />
              <StyledWarning>{errors?.BillingCompany?.message}</StyledWarning>

              <StyledInput
                placeholder="Optional line"
                defaultValue={BillingOptionalLine}
                {...register('BillingOptionalLine')}
              />
              <StyledWarning>
                {errors?.BillingOptionalLine?.message}
              </StyledWarning>

              <StyledInput
                placeholder="Street and number*"
                defaultValue={BillingStreetAndNumber}
                {...register('BillingStreetAndNumber')}
              />
              <StyledWarning>
                {errors?.BillingStreetAndNumber?.message}
              </StyledWarning>

              <StyledInput
                placeholder="ZIP*"
                defaultValue={BillingZip}
                {...register('BillingZip')}
              />
              <StyledWarning>{errors?.BillingZip?.message}</StyledWarning>

              <StyledInput
                placeholder="City*"
                defaultValue={BillingCity}
                {...register('BillingCity')}
              />
              <StyledWarning>{errors?.BillingCity?.message}</StyledWarning>

              <StyledInput
                placeholder="Country*"
                defaultValue={BillingCountry}
                {...register('BillingCountry')}
              />
              <StyledWarning>{errors?.BillingCountry?.message}</StyledWarning>
            </div>

            <CheckboxWrapper>
              <Checkbox
                type="checkbox"
                disabled={showShippingAddress}
                defaultChecked={LocalPickup}
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
              <ButtonContentWrapper>
                PROCEED TO Checkout
                <h5>
                  SUBTOTAL:{' '}
                  {subTotalPrice.toLocaleString('de-DE', {
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

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`;

const ButtonContentWrapper = styled.div`
  text-align: left;
  justify-self: flex-start;
`;
