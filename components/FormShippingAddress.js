import React from 'react';
import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';
import {
  StyledWarning,
  StyledInput,
  StyledHeadline,
} from './FormStyledComponents';

const ShippingAddress = ({ register, errors }) => {
  const hydrated = useHydration();
  const user = useStore(state => state.user);
  const {
    shippingFirstName,
    shippingLastName,
    shippingCompany,
    shippingOptionalLine,
    shippingStreetAndNumber,
    shippingZip,
    shippingCity,
    shippingCountry,
  } = user;

  return (
    <>
      {hydrated && (
        <>
          <StyledHeadline>Shipping Address</StyledHeadline>
          <StyledInput
            placeholder="First Name*"
            defaultValue={shippingFirstName}
            {...register('shippingFirstName')}
          />
          <StyledWarning>{errors?.shippingFirstName?.message}</StyledWarning>

          <StyledInput
            placeholder="Last Name*"
            defaultValue={shippingLastName}
            {...register('shippingLastName')}
          />
          <StyledWarning>{errors?.shippingLastName?.message}</StyledWarning>
          <StyledInput
            placeholder="Company"
            defaultValue={shippingCompany}
            {...register('shippingCompany')}
          />
          <StyledWarning>{errors?.shippingCompany?.message}</StyledWarning>

          <StyledInput
            placeholder="Optional line"
            defaultValue={shippingOptionalLine}
            {...register('shippingOptionalLine')}
          />
          <StyledWarning>{errors?.shippingOptionalLine?.message}</StyledWarning>

          <StyledInput
            placeholder="Street and number*"
            defaultValue={shippingStreetAndNumber}
            {...register('shippingStreetAndNumber')}
          />
          <StyledWarning>
            {errors?.shippingStreetAndNumber?.message}
          </StyledWarning>

          <StyledInput
            placeholder="ZIP*"
            defaultValue={shippingZip}
            {...register('shippingZip')}
          />
          <StyledWarning>{errors?.shippingZip?.message}</StyledWarning>

          <StyledInput
            placeholder="City*"
            defaultValue={shippingCity}
            {...register('shippingCity')}
          />

          <StyledWarning>{errors?.shippingCity?.message}</StyledWarning>

          <StyledInput
            placeholder="Country*"
            defaultValue={shippingCountry}
            {...register('shippingCountry')}
          />
          <StyledWarning>{errors?.shippingCountry?.message}</StyledWarning>
        </>
      )}
    </>
  );
};

export default ShippingAddress;
