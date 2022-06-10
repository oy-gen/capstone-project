import { useRouter } from 'next/router';
import styled from 'styled-components';
import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';
import { useForm } from 'react-hook-form';
import { Checkbox } from '@mui/material';
import Link from 'next/link';
import NavWrapper from './NavWrapper';
import { Button } from './Buttons';
import IconLeft from '../public/icon-left.svg';
import { BigButton, SmallButton } from './Buttons';

export default function AddressForm() {
  const totals = useStore(state => state.totals);
  const { SubTotalPrice } = totals;
  const updateTotal = useStore(state => state.updateTotal);
  const hydrated = useHydration();
  const router = useRouter();
  const setBuyerData = useStore(state => state.setBuyerData);
  const buyer = useStore(state => state.buyer);

  // --------useForm const-----------//
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    setBuyerData(data);
    updateTotal();
    console.log(buyer);
    console.log(totals);
    router.push('/checkout');
  };
  const showCheckbox = watch('LocalPickup', false);
  const showShippingAddress = watch('DifferentShipping', false);
  // --------useForm const-----------//

  return (
    <>
      {hydrated && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormWrapper>
            <StyledHeadline>
              {showShippingAddress
                ? 'Billing Address'
                : 'Shipping & Billing Address'}
            </StyledHeadline>

            <div>
              <StyledInput
                placeholder="First Name*"
                {...register('BillingFirstName', {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors?.BillingFirstName?.type === 'required' && (
                <StyledWarning>required</StyledWarning>
              )}
              {errors?.BillingFirstName?.type === 'maxLength' && (
                <StyledWarning>20 characters max</StyledWarning>
              )}
              {errors?.BillingFirstName?.type === 'pattern' && (
                <StyledWarning>Alphabetical only</StyledWarning>
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
                <StyledWarning>required</StyledWarning>
              )}
              {errors?.BillingLastName?.type === 'maxLength' && (
                <StyledWarning>20 characters max</StyledWarning>
              )}
              {errors?.BillingLastName?.type === 'pattern' && (
                <StyledWarning>Alphabetical only</StyledWarning>
              )}

              <StyledInput
                type="text"
                placeholder="Email*"
                {...register('BuyerEmail', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors?.BuyerEmail?.type === 'required' && (
                <StyledWarning>required</StyledWarning>
              )}

              {errors?.BuyerEmail?.type === 'pattern' && (
                <StyledWarning>email not correct</StyledWarning>
              )}
              <StyledInput
                placeholder="Company"
                {...register('BillingCompany', {
                  required: false,
                  maxLength: 20,
                })}
              />
              {errors?.BillingCompany?.type === 'maxLength' && (
                <StyledWarning>20 characters max</StyledWarning>
              )}

              <StyledInput
                placeholder="Street and number*"
                {...register('BillingStreetAndNumber', {
                  required: true,
                  maxLength: 40,
                })}
              />
              {errors?.BillingStreetAndNumber?.type === 'required' && (
                <StyledWarning>required</StyledWarning>
              )}
              {errors?.BillingStreetAndNumber?.type === 'maxLength' && (
                <StyledWarning>F40 characters max</StyledWarning>
              )}

              <StyledInput
                placeholder="Optional line"
                {...register('BillingOptionalLine', {
                  required: false,
                  maxLength: 20,
                })}
              />
              {errors?.BillingOptionalLine?.type === 'maxLength' && (
                <StyledWarning>too long</StyledWarning>
              )}

              <StyledInput
                placeholder="ZIP*"
                {...register('BillingZip', {
                  required: true,
                  maxLength: 10,
                })}
              />
              {errors?.BillingZip?.type === 'required' && (
                <StyledWarning>required</StyledWarning>
              )}
              {errors?.BillingZip?.type === 'maxLength' && (
                <StyledWarning>10 characters max</StyledWarning>
              )}

              <StyledInput
                placeholder="City*"
                {...register('BillingCity', {
                  required: true,
                  maxLength: 20,
                })}
              />
              {errors?.BillingCity?.type === 'required' && (
                <StyledWarning>required</StyledWarning>
              )}
              {errors?.BillingCity?.type === 'maxLength' && (
                <StyledWarning>20 characters max</StyledWarning>
              )}
              {errors?.BillingCity?.type === 'pattern' && (
                <StyledWarning>Alphabetical only</StyledWarning>
              )}
              <StyledInput
                placeholder="Country*"
                {...register('BillingCountry', {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors?.BillingCountry?.type === 'required' && (
                <StyledWarning>required</StyledWarning>
              )}
              {errors?.BillingCountry?.type === 'maxLength' && (
                <StyledWarning>20 characters max</StyledWarning>
              )}
              {errors?.BillingCountry?.type === 'pattern' && (
                <StyledWarning>Alphabetical only</StyledWarning>
              )}
            </div>
            <CheckboxWrapper>
              <Checkbox
                type="checkbox"
                disabled={showShippingAddress}
                {...register('LocalPickup', {})}
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
                <Checkbox
                  type="checkbox"
                  {...register('DifferentShipping', {})}
                />
                <span>Use a different shipping address</span>
              </CheckboxWrapper>
            )}

            {showShippingAddress && (
              <div style={{}}>
                <StyledHeadline>Shipping address:</StyledHeadline>
                <StyledInput
                  placeholder="First Name*"
                  {...register('ShippingFirstName', {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {errors?.ShippingFirstName?.type === 'required' && (
                  <StyledWarning>required</StyledWarning>
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
                  <StyledWarning>required</StyledWarning>
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
                  placeholder="Street and number*"
                  {...register('ShippingStreetAndNumber', {
                    required: true,
                    maxLength: 40,
                  })}
                />
                {errors?.ShippingStreetAndNumber?.type === 'required' && (
                  <StyledWarning>required</StyledWarning>
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
                  <StyledWarning>required</StyledWarning>
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
                  <StyledWarning>required</StyledWarning>
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
                  <StyledWarning>required</StyledWarning>
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
                  {SubTotalPrice.toLocaleString('de-DE', {
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
