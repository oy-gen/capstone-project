import styled from 'styled-components';
import useStore from '../hooks/useStore';

export default function CheckoutTable() {
  const products = useStore(state => state.products);
  const productsInCart = products.filter(product => product.quantity !== 0);
  const TotalShipping = useStore(state => state.TotalShipping);
  const TotalParcels = useStore(state => state.TotalParcels);
  const ParcelPrice = useStore(state => state.ParcelPrice);
  const Taxes = useStore(state => state.Taxes);
  const TotalTaxes = useStore(state => state.TotalTaxes);
  const SubTotalPriceInclShipping = useStore(
    state => state.SubTotalPriceInclShipping
  );
  const TotalPrice = useStore(state => state.TotalPrice);
  const LocalPickup = useStore(state => state.LocalPickup);

  return (
    <>
      <StyledTable>
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
        {LocalPickup || (
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
          <th align="right">Subtotal</th>
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
      </StyledTable>
    </>
  );
}

const StyledTable = styled.table`
  font-size: 0.9rem;
  padding: 1rem 0;
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
    font-size: 1rem;
    font-weight: 600;
    border-top: 2px solid var(--text-maincolor);
    border-bottom: 0;
  }
  th {
    text-transform: uppercase;
    padding: 0.4rem;
    color: (--text-maincolor);
    text-align: ${props => props.align};
    border-bottom: 2px solid var(--text-maincolor);
    background-color: var(--background-color);
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
