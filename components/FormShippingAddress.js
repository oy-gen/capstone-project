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
  const buyer = useStore(state => state.buyer);
  const {
    ShippingFirstName,
    ShippingLastName,
    ShippingCompany,
    ShippingOptionalLine,
    ShippingStreetAndNumber,
    ShippingZip,
    ShippingCity,
    ShippingCountry,
  } = buyer;

  return (
    <>
      {hydrated && (
        <>
          <StyledHeadline>Shipping Address:</StyledHeadline>
          <StyledInput
            placeholder="First Name*"
            defaultValue={ShippingFirstName}
            {...register('ShippingFirstName')}
          />
          <StyledWarning>{errors?.ShippingFirstName?.message}</StyledWarning>

          <StyledInput
            placeholder="Last Name*"
            defaultValue={ShippingLastName}
            {...register('ShippingLastName')}
          />
          <StyledWarning>{errors?.ShippingLastName?.message}</StyledWarning>
          <StyledInput
            placeholder="Company"
            defaultValue={ShippingCompany}
            {...register('ShippingCompany')}
          />
          <StyledWarning>{errors?.ShippingCompany?.message}</StyledWarning>

          <StyledInput
            placeholder="Optional line"
            defaultValue={ShippingOptionalLine}
            {...register('ShippingOptionalLine')}
          />
          <StyledWarning>{errors?.ShippingOptionalLine?.message}</StyledWarning>

          <StyledInput
            placeholder="Street and number*"
            defaultValue={ShippingStreetAndNumber}
            {...register('ShippingStreetAndNumber')}
          />
          <StyledWarning>
            {errors?.ShippingStreetAndNumber?.message}
          </StyledWarning>

          <StyledInput
            placeholder="ZIP*"
            defaultValue={ShippingZip}
            {...register('ShippingZip')}
          />
          <StyledWarning>{errors?.ShippingZip?.message}</StyledWarning>

          <StyledInput
            placeholder="City*"
            defaultValue={ShippingCity}
            {...register('ShippingCity')}
          />

          <StyledWarning>{errors?.ShippingCity?.message}</StyledWarning>

          <StyledInput
            placeholder="Country*"
            defaultValue={ShippingCountry}
            {...register('ShippingCountry')}
          />
          <StyledWarning>{errors?.ShippingCountry?.message}</StyledWarning>
        </>
      )}
    </>
  );
};

export default ShippingAddress;
