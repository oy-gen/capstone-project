import styled from 'styled-components';
import useStore from '../hooks/useStore';

export default function CheckoutTable() {
  const products = useStore(state => state.products);
  const buyer = useStore(state => state.buyer);
  const productsInCart = products.filter(product => product.quantity !== 0);
  const ParcelPrice = useStore(state => state.seller.ParcelPrice);
  const Taxes = useStore(state => state.seller.Taxes);
  const totals = useStore(state => state.totals);
  const {
    TotalTaxes,
    TotalPrice,
    TotalShipping,
    SubTotalPriceInclShipping,
    TotalParcels,
  } = totals;
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
        <div >
          <StyledHeadline align="left">
            {DifferentShipping
              ? 'Billing Address'
              : 'Shipping & Billing Address'}
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
          <div >
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

          {productsInCart.map(product => (
            <tr key={product.id}>
              <td align="left">
                <strong>{product.name}</strong>
              </td>
              <td align="center">{product.quantity}</td>
              <td align="right">
                {product.WSprice.toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </td>
              <td align="right">
                {product.sum.toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </td>
            </tr>
          ))}
          {TotalShipping !== 0 && (
            <tr>
              <td align="left">
                <strong>Shipping</strong>
              </td>
              <td align="center">{TotalParcels}</td>
              <td align="right">
                {ParcelPrice.toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </td>
              <td align="right">
                {TotalShipping.toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </td>
            </tr>
          )}
          <tr>
            <td empty />
            <td empty />
            <th align="right">SUBTOTAL</th>
            <th align="right">
              {SubTotalPriceInclShipping.toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR',
              })}
            </th>
          </tr>
          <tr>
            <td empty />
            <td empty />
            <th align="right">VAT {Taxes}%</th>
            <th align="right">
              {TotalTaxes.toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR',
              })}
            </th>
          </tr>
          <tr>
            <td empty />
            <td empty />
            <th align="right">TOTAL</th>
            <th align="right">
              {TotalPrice.toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR',
              })}
            </th>
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
  justify-content: left;
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
