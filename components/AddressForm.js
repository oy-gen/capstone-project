import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';
import Checkbox from '@mui/material/Checkbox';
import { useForm } from 'react-hook-form';

export default function AddressForm() {
  const hydrated = useHydration();

  // --------useForm const-----------//
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  // --------Checkbox Conditions-----------//
  const DifferentShipping = useStore(state => state.buyer.DifferentShipping);
  const LocalPickup = useStore(state => state.buyer.LocalPickup);
  const changeLocalPickup = useStore(state => state.changeLocalPickup);
  const changeDifferentShipping = useStore(
    state => state.changeDifferentShipping
  );
  function onCheckLocalPickup(event) {
    {
      event.target.checked ? changeLocalPickup(true) : changeLocalPickup(false);
    }
  }
  function onCheckDifferentShipping(event) {
    {
      event.target.checked
        ? changeDifferentShipping(true)
        : changeDifferentShipping(false);
    }
  }

  return (
    <>
      {hydrated && (
        <FormWrapper>
          <h2>Billing Address:</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledInput
              placeholder="Company*"
              {...register('BillingCompany', {
                required: false,
                maxLength: 40,
              })}
            />
            {errors?.BillingCompany?.type === 'maxLength' && (
              <p>First name cannot exceed 40 characters</p>
            )}
            <StyledInput
              placeholder="First Name*"
              {...register('BillingFirstName', {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.BillingFirstName?.type === 'required' && (
              <p>This field is required</p>
            )}
            {errors?.BillingFirstName?.type === 'maxLength' && (
              <p>First name cannot exceed 20 characters</p>
            )}
            {errors?.BillingFirstName?.type === 'pattern' && (
              <p>Alphabetical characters only</p>
            )}
            <StyledInput
              placeholder="Last Name*"
              {...register('BillingLastName', {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.BillingLastName?.type === 'required' && (
              <p>This field is required</p>
            )}
            {errors?.BillingLastName?.type === 'maxLength' && (
              <p>First name cannot exceed 20 characters</p>
            )}
            {errors?.BillingLastName?.type === 'pattern' && (
              <p>Alphabetical characters only</p>
            )}

            <StyledInput
              placeholder="Street and number*"
              {...register('BillingStreetAndNumber', {
                required: true,
                maxLength: 40,
              })}
            />
            {errors?.BillingStreetAndNumber?.type === 'required' && (
              <p>This field is required</p>
            )}
            {errors?.BillingStreetAndNumber?.type === 'maxLength' && (
              <p>First name cannot exceed 40 characters</p>
            )}

            <StyledInput
              placeholder="Optional line"
              {...register('BillingOptionalLine', {
                required: false,
                maxLength: 40,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.BillingOptionalLine?.type === 'maxLength' && (
              <p>First name cannot exceed 40 characters</p>
            )}
            {errors?.BillingOptionalLine?.type === 'pattern' && (
              <p>Alphabetical characters only</p>
            )}

            <StyledInput
              placeholder="ZIP*"
              {...register('BillingZip', {
                required: true,
                maxLength: 40,
              })}
            />
            {errors?.BillingZip?.type === 'required' && (
              <p>This field is required</p>
            )}
            {errors?.BillingZip?.type === 'maxLength' && (
              <p>First name cannot exceed 40 characters</p>
            )}

            <StyledInput
              placeholder="City*"
              {...register('BillingCity', {
                required: true,
                maxLength: 40,
              })}
            />
            {errors?.BillingCity?.type === 'required' && (
              <p>This field is required</p>
            )}
            {errors?.BillingCity?.type === 'maxLength' && (
              <p>First name cannot exceed 40 characters</p>
            )}
            {errors?.BillingCity?.type === 'pattern' && (
              <p>Alphabetical characters only</p>
            )}

            <StyledInput
              placeholder="Country*"
              {...register('BillingCountry', {
                required: true,
                maxLength: 40,
              })}
            />
            {errors?.BillingCountry?.type === 'required' && (
              <p>This field is required</p>
            )}
            {errors?.BillingCountry?.type === 'maxLength' && (
              <p>First name cannot exceed 40 characters</p>
            )}
            {errors?.BillingCountry?.type === 'pattern' && (
              <p>Alphabetical characters only</p>
            )}
            <label>
              <Checkbox
                id="LocalPickup"
                name="LocalPickup"
                checked={LocalPickup}
                onChange={onCheckLocalPickup}
              />
              <span>This is a local pickup order</span>
            </label>
            {!LocalPickup ? (
              <div>
                <label>
                  <Checkbox
                    id="DifferentShipping"
                    name="DifferentShipping"
                    checked={DifferentShipping}
                    onChange={onCheckDifferentShipping}
                  />
                  <span>Use a different shipping address</span>
                </label>
              </div>
            ) : (
              ''
            )}

            {DifferentShipping === true ? (
              <div>
                <h2>Shipping Address:</h2>
                <StyledInput
                  placeholder="Company*"
                  {...register('ShippingCompany', {
                    required: false,
                    maxLength: 40,
                  })}
                />
                {errors?.ShippingCompany?.type === 'maxLength' && (
                  <p>First name cannot exceed 40 characters</p>
                )}
                <StyledInput
                  placeholder="First Name*"
                  {...register('ShippingFirstName', {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {errors?.ShippingFirstName?.type === 'required' && (
                  <p>This field is required</p>
                )}
                {errors?.ShippingFirstName?.type === 'maxLength' && (
                  <p>First name cannot exceed 20 characters</p>
                )}
                {errors?.ShippingFirstName?.type === 'pattern' && (
                  <p>Alphabetical characters only</p>
                )}
                <StyledInput
                  placeholder="Last Name*"
                  {...register('ShippingLastName', {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {errors?.ShippingLastName?.type === 'required' && (
                  <p>This field is required</p>
                )}
                {errors?.ShippingLastName?.type === 'maxLength' && (
                  <p>First name cannot exceed 20 characters</p>
                )}
                {errors?.ShippingLastName?.type === 'pattern' && (
                  <p>Alphabetical characters only</p>
                )}

                <StyledInput
                  placeholder="Street and number*"
                  {...register('ShippingStreetAndNumber', {
                    required: true,
                    maxLength: 40,
                  })}
                />
                {errors?.ShippingStreetAndNumber?.type === 'required' && (
                  <p>This field is required</p>
                )}
                {errors?.ShippingStreetAndNumber?.type === 'maxLength' && (
                  <p>First name cannot exceed 40 characters</p>
                )}

                <StyledInput
                  placeholder="Optional line"
                  {...register('ShippingOptionalLine', {
                    required: false,
                    maxLength: 40,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {errors?.ShippingOptionalLine?.type === 'maxLength' && (
                  <p>First name cannot exceed 40 characters</p>
                )}
                {errors?.ShippingOptionalLine?.type === 'pattern' && (
                  <p>Alphabetical characters only</p>
                )}

                <StyledInput
                  placeholder="ZIP*"
                  {...register('ShippingZip', {
                    required: true,
                    maxLength: 40,
                  })}
                />
                {errors?.ShippingZip?.type === 'required' && (
                  <p>This field is required</p>
                )}
                {errors?.ShippingZip?.type === 'maxLength' && (
                  <p>First name cannot exceed 40 characters</p>
                )}

                <StyledInput
                  placeholder="City*"
                  {...register('ShippingCity', {
                    required: true,
                    maxLength: 40,
                  })}
                />
                {errors?.ShippingCity?.type === 'required' && (
                  <p>This field is required</p>
                )}
                {errors?.ShippingCity?.type === 'maxLength' && (
                  <p>First name cannot exceed 40 characters</p>
                )}
                {errors?.ShippingCity?.type === 'pattern' && (
                  <p>Alphabetical characters only</p>
                )}

                <StyledInput
                  placeholder="Country*"
                  {...register('ShippingCountry', {
                    required: true,
                    maxLength: 40,
                  })}
                />
                {errors?.ShippingCountry?.type === 'required' && (
                  <p>This field is required</p>
                )}
                {errors?.ShippingCountry?.type === 'maxLength' && (
                  <p>First name cannot exceed 40 characters</p>
                )}
                {errors?.ShippingCountry?.type === 'pattern' && (
                  <p>Alphabetical characters only</p>
                )}
              </div>
            ) : (
              ''
            )}

            <input type="submit" />
          </form>
        </FormWrapper>
      )}
    </>
  );
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<AddressForm />, rootElement);

const FormWrapper = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`;

const StyledInput = styled.input`
  width: 90vw;
  font-size: 1rem;
  line-height: 1rem;
  border: 1px solid white;
  padding: 5px;
  margin-bottom: 1rem;
  color: var(--light-textcolor);
`;
