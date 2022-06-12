import styled from 'styled-components';
import useStore from '../hooks/useStore';
import { GetProductSum } from './Calculations';
import { GetFullInfo } from './Calculations';
import { GetTotals } from './Calculations';

export default function CheckoutTable() {
  const {
    totalTaxes,
    totalPrice,
    subTotalPriceInclShipping,
    totalShipping,
    totalParcels,
  } = GetTotals();

  const buyer = useStore(state => state.buyer);
  const cart = useStore(state => state.CART);
  const productsInCart = cart.filter(product => product.quantity > 0);
  const parcelPrice = useStore(state => state.seller.ParcelPrice);
  const taxes = useStore(state => state.seller.Taxes);


  // console.log('Hallo');
   console.log(GetTotals());
  // console.log(GetTotals().totalShipping);

  const {
    BuyerEmail,
    DifferentShipping,
    BillingFirstName,
    BillingLastName,
    BillingCompany,
    BillingStreetAndNumber,
    BillingOptionalLine,
    BillingZip,
    BillingCity,
    BillingCountry,
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
      <AddressSection>
        <div>
          <StyledHeadline align="left">
            {DifferentShipping
              ? 'Billing Address'
              : 'Billing / Shipping Address'}
          </StyledHeadline>
          {BillingCompany.length > 0 && (
            <StyledLine>{BillingCompany}</StyledLine>
          )}
          <StyledLine>
            {BillingFirstName} {BillingLastName}
          </StyledLine>
          <StyledLine>{BillingStreetAndNumber}</StyledLine>
          {BillingOptionalLine.length > 0 && (
            <StyledLine>{BillingOptionalLine}</StyledLine>
          )}
          <StyledLine>
            {BillingZip} {BillingCity}
          </StyledLine>
          <StyledLine>{BillingCountry}</StyledLine>
          <StyledLine>{BuyerEmail}</StyledLine>
        </div>
        {DifferentShipping && (
          <div>
            <StyledHeadline>shipping address</StyledHeadline>
            {ShippingCompany.length > 0 && (
              <StyledLine>{ShippingCompany}</StyledLine>
            )}
            <StyledLine>
              {ShippingFirstName} {ShippingLastName}
            </StyledLine>
            <StyledLine>{ShippingStreetAndNumber}</StyledLine>
            {ShippingOptionalLine.length > 0 && (
              <StyledLine>{ShippingOptionalLine}</StyledLine>
            )}
            <StyledLine>
              {ShippingZip} {ShippingCity}
            </StyledLine>
            <StyledLine>{ShippingCountry}</StyledLine>
          </div>
        )}
      </AddressSection>
      <StyledTable>
        <tbody>
          <tr>
            <th align="left">product</th>
            <th align="center">QTY</th>
            <th align="right">unit</th>
            <th align="right">sum</th>
          </tr>

          {productsInCart.map(productInCart => (
            <tr key={productInCart.id}>
              <td align="left">
                <strong>{GetFullInfo(productInCart.id).name}</strong>
              </td>
              <td align="center">{productInCart.quantity}</td>
              <td align="right">
                {GetFullInfo(productInCart.id).WSprice.toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </td>
              <td align="right">
                {' '}
                {GetFullInfo(productInCart.id).sum.toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </td>
            </tr>
          ))}

          {totalShipping !== 0 && (
            <tr>
              <td align="left">
                <strong>Shipping</strong>
              </td>
              <td align="center">{totalParcels}</td>
              <td align="right">
                {parcelPrice.toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </td>
              <td align="right">{totalShipping.toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                })}</td>
            </tr>
          )}
          <tr>
            <td empty />
            <td empty />
            <th align="right">SUBTOTAL</th>
            <th align="right">{subTotalPriceInclShipping.toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                })}</th>
          </tr>
          <tr>
            <td empty />
            <td empty />
            <th align="right">VAT {taxes}%</th>
            <th align="right">{totalTaxes.toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                })}</th>
          </tr>
          <tr>
            <td empty />
            <td empty />
            <th align="right">TOTAL</th>
            <th align="right">{totalPrice.toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                })}</th>
          </tr>
        </tbody>
      </StyledTable>
    </>
  );
}

const StyledTable = styled.table`
  font-size: 0.9rem;
  padding: 1rem 0 3rem;
  color: var(--text-maincolor);
  width: 100%;
  border-spacing: 0;

  tr {
    height: 3.6rem;
  }

  tr:nth-child(even) {
    background-color: white;
  }

  tr:last-of-type th {
    border-top: 2px solid var(--text-maincolor);
    border-bottom: 0;
  }

  th {
    text-transform: uppercase;
    padding: 0.4rem;
    color: (--text-maincolor);
    text-align: ${props => props.align};
    border-bottom: 1px solid var(--text-lightcolor);
  }

  td {
    padding: 0.4rem;
    line-height: 1.2rem;
    border-bottom: 1px solid var(--text-lightcolor);
  }

  td:empty {
    border: 0;
    background-color: var(--background-color);
  }
`;

const AddressSection = styled.section`
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
`;

const StyledLine = styled.p`
  line-height: 0.6rem;
  color: var(--text-maincolor);
`;

const StyledHeadline = styled.h2`
  font-size: 14px;
  text-align: ${props => props.align};
  margin: 30px auto 10px;
`;
