import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';
import Checkbox from '@mui/material/Checkbox';
import { useForm } from 'react-hook-form';

export default function AddressForm() {
  const hydrated = useHydration();
  const buyer = useStore(state => state.buyer);

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
            <div>
              <StyledInput
                placeholder="Company"
                {...register('BillingCompany', {
                  required: false,
                  maxLength: 40,
                })}
              />
              {errors?.BillingCompany?.type === 'maxLength' && (
                <StyledWarning>
                  First name cannot exceed 40 characters
                </StyledWarning>
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
                <StyledWarning>This field is required</StyledWarning>
              )}
              {errors?.BillingFirstName?.type === 'maxLength' && (
                <StyledWarning>
                  First name cannot exceed 20 characters
                </StyledWarning>
              )}
              {errors?.BillingFirstName?.type === 'pattern' && (
                <StyledWarning>Alphabetical characters only</StyledWarning>
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
                <StyledWarning>This field is required</StyledWarning>
              )}
              {errors?.BillingLastName?.type === 'maxLength' && (
                <StyledWarning>
                  First name cannot exceed 20 characters
                </StyledWarning>
              )}
              {errors?.BillingLastName?.type === 'pattern' && (
                <StyledWarning>Alphabetical characters only</StyledWarning>
              )}

              <StyledInput
                placeholder="Street and number*"
                {...register('BillingStreetAndNumber', {
                  required: true,
                  maxLength: 40,
                })}
              />
              {errors?.BillingStreetAndNumber?.type === 'required' && (
                <StyledWarning>This field is required</StyledWarning>
              )}
              {errors?.BillingStreetAndNumber?.type === 'maxLength' && (
                <StyledWarning>
                  First name cannot exceed 40 characters
                </StyledWarning>
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
                <StyledWarning>
                  First name cannot exceed 40 characters
                </StyledWarning>
              )}
              {errors?.BillingOptionalLine?.type === 'pattern' && (
                <StyledWarning>Alphabetical characters only</StyledWarning>
              )}

              <StyledInput
                placeholder="ZIP*"
                {...register('BillingZip', {
                  required: true,
                  maxLength: 40,
                })}
              />
              {errors?.BillingZip?.type === 'required' && (
                <StyledWarning>This field is required</StyledWarning>
              )}
              {errors?.BillingZip?.type === 'maxLength' && (
                <StyledWarning>
                  First name cannot exceed 40 characters
                </StyledWarning>
              )}

              <StyledInput
                placeholder="City*"
                {...register('BillingCity', {
                  required: true,
                  maxLength: 40,
                })}
              />
              {errors?.BillingCity?.type === 'required' && (
                <StyledWarning>This field is required</StyledWarning>
              )}
              {errors?.BillingCity?.type === 'maxLength' && (
                <StyledWarning>
                  First name cannot exceed 40 characters
                </StyledWarning>
              )}
              {errors?.BillingCity?.type === 'pattern' && (
                <StyledWarning>Alphabetical characters only</StyledWarning>
              )}

              <StyledInput
                placeholder="Country*"
                {...register('BillingCountry', {
                  required: true,
                  maxLength: 40,
                })}
              />
              {errors?.BillingCountry?.type === 'required' && (
                <StyledWarning>This field is required</StyledWarning>
              )}
              {errors?.BillingCountry?.type === 'maxLength' && (
                <StyledWarning>
                  First name cannot exceed 40 characters
                </StyledWarning>
              )}
              {errors?.BillingCountry?.type === 'pattern' && (
                <StyledWarning>Alphabetical characters only</StyledWarning>
              )}
            </div>
            <div>
              <input
                type="checkbox"
                onChange={() => onCheckLocalPickup}
                {...register('LocalPickup', {})}
              />
              <span>This is a local pickup order</span>
            </div>

            {!LocalPickup ? (
              <div>
                <input
                  type="checkbox"
                  onChange={() => onCheckDifferentShipping}
                  {...register('DifferentShipping', {})}
                />
                <span>Use a different shipping address</span>
              </div>
            ) : (
              ''
            )}

            {DifferentShipping === true ? (
              <div>
                <h2>Shipping Address:</h2>
                <StyledInput
                  placeholder="Company"
                  {...register('ShippingCompany', {
                    required: false,
                    maxLength: 40,
                  })}
                />
                {errors?.ShippingCompany?.type === 'maxLength' && (
                  <StyledWarning>
                    First name cannot exceed 40 characters
                  </StyledWarning>
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
                  <StyledWarning>This field is required</StyledWarning>
                )}
                {errors?.ShippingFirstName?.type === 'maxLength' && (
                  <StyledWarning>
                    First name cannot exceed 20 characters
                  </StyledWarning>
                )}
                {errors?.ShippingFirstName?.type === 'pattern' && (
                  <StyledWarning>Alphabetical characters only</StyledWarning>
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
                  <StyledWarning>This field is required</StyledWarning>
                )}
                {errors?.ShippingLastName?.type === 'maxLength' && (
                  <StyledWarning>
                    First name cannot exceed 20 characters
                  </StyledWarning>
                )}
                {errors?.ShippingLastName?.type === 'pattern' && (
                  <StyledWarning>Alphabetical characters only</StyledWarning>
                )}

                <StyledInput
                  type="text"
                  placeholder="Email"
                  {...register('BuyerEmail', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors?.BuyerEmail?.type === 'required' && (
                  <StyledWarning>This field is required</StyledWarning>
                )}

                {errors?.BuyerEmail?.type === 'pattern' && (
                  <StyledWarning>This is not a correct email</StyledWarning>
                )}
                <StyledInput
                  placeholder="Street and number*"
                  {...register('ShippingStreetAndNumber', {
                    required: true,
                    maxLength: 40,
                  })}
                />
                {errors?.ShippingStreetAndNumber?.type === 'required' && (
                  <StyledWarning>This field is required</StyledWarning>
                )}
                {errors?.ShippingStreetAndNumber?.type === 'maxLength' && (
                  <StyledWarning>
                    First name cannot exceed 40 characters
                  </StyledWarning>
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
                  <StyledWarning>
                    First name cannot exceed 40 characters
                  </StyledWarning>
                )}
                {errors?.ShippingOptionalLine?.type === 'pattern' && (
                  <StyledWarning>Alphabetical characters only</StyledWarning>
                )}

                <StyledInput
                  placeholder="ZIP*"
                  {...register('ShippingZip', {
                    required: true,
                    maxLength: 40,
                  })}
                />
                {errors?.ShippingZip?.type === 'required' && (
                  <StyledWarning>This field is required</StyledWarning>
                )}
                {errors?.ShippingZip?.type === 'maxLength' && (
                  <StyledWarning>
                    First name cannot exceed 40 characters
                  </StyledWarning>
                )}

                <StyledInput
                  placeholder="City*"
                  {...register('ShippingCity', {
                    required: true,
                    maxLength: 40,
                  })}
                />
                {errors?.ShippingCity?.type === 'required' && (
                  <StyledWarning>This field is required</StyledWarning>
                )}
                {errors?.ShippingCity?.type === 'maxLength' && (
                  <StyledWarning>
                    First name cannot exceed 40 characters
                  </StyledWarning>
                )}
                {errors?.ShippingCity?.type === 'pattern' && (
                  <StyledWarning>Alphabetical characters only</StyledWarning>
                )}

                <StyledInput
                  placeholder="Country*"
                  {...register('ShippingCountry', {
                    required: true,
                    maxLength: 40,
                  })}
                />
                {errors?.ShippingCountry?.type === 'required' && (
                  <StyledWarning>This field is required</StyledWarning>
                )}
                {errors?.ShippingCountry?.type === 'maxLength' && (
                  <StyledWarning>
                    First name cannot exceed 40 characters
                  </StyledWarning>
                )}
                {errors?.ShippingCountry?.type === 'pattern' && (
                  <StyledWarning>Alphabetical characters only</StyledWarning>
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

//const rootElement = document.getElementById('root');
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

const StyledWarning = styled.p`
  color: #bf1650;
`;
