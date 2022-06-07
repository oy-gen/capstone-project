import * as React from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';

export default function AddressForm() {
  const CheckBox = props => <input type="checkbox" {...props} />;
  const hydrated = useHydration();
  const buyer = useStore(state => state.buyer);
  const { ShippingBilling, LocalPickup } = buyer;
  const changeLocalPickup = useStore(state => state.changeLocalPickup);
  const changeShippingBilling = useStore(state => state.changeShippingBilling);
  function onCheckLocalPickup(event) {
    {
      event.target.checked ? changeLocalPickup(true) : changeLocalPickup(false);
    }
  }
  function onCheckShippingBilling(event) {
    {
      event.target.checked
        ? changeShippingBilling(true)
        : changeShippingBilling(false);
    }
  }
  console.log(buyer);

  return (
    <>
      {hydrated && (
        <FormWrapper>
          <h2>Enter Your Billing Address</h2>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                id="company"
                name="company"
                label="Company"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ display: 'flex' }}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="streetandnumber"
                name="streetandnumber"
                label="Street and house number"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                variant="standard"
              />
            </Grid>

            <Grid item xs={12}>
              <label>
                <CheckBox
                  id="LocalPickup"
                  name="LocalPickup"
                  checked={LocalPickup}
                  onChange={onCheckLocalPickup}
                />
                <span>This is a local pickup order. No shipping required.</span>
              </label>
            </Grid>
            {LocalPickup !== true ? (
              <Grid item xs={12}>
                <label>
                  <CheckBox
                    id="ShippingBilling"
                    name="ShippingBilling"
                    checked={ShippingBilling}
                    onChange={onCheckShippingBilling}
                  />
                  <span>Use a different shipping address</span>
                </label>
              </Grid>
            ) : (
              ''
            )}
          </Grid>
          {ShippingBilling === true ? (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="company"
                  name="company"
                  label="Company"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <div style={{ display: 'flex' }}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                  />
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="streetandnumber"
                  name="streetandnumber"
                  label="Street and house number"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Address line 2"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="shipping country"
                  variant="standard"
                />
              </Grid>
            </Grid>
          ) : (
            ''
          )}
        </FormWrapper>
      )}
    </>
  );
}

const FormWrapper = styled.form`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`;
