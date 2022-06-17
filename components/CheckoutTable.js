import styled from 'styled-components';
import useStore from '../hooks/useStore';
import { useFullInfo } from '../hooks/useCalculation';
import { GetTotals } from '../hooks/useCalculation';
import TableRow from './CheckoutRow';

export default function CheckoutTable() {
  const {
    totalTaxes,
    totalPrice,
    subTotalPriceInclShipping,
    totalShipping,
    totalParcels,
  } = GetTotals();

  const cart = useStore(state => state.cart);
  const productsInCart = cart.filter(product => product.quantity > 0);
  const parcelPrice = useStore(state => state.seller.ParcelPrice);
  const taxes = useStore(state => state.seller.Taxes);
  const fullInfo = useFullInfo;
  return (
    <>
      <StyledTable>
        <tbody>
          <tr>
            <th align="left">product</th>
            <th align="center">QTY</th>
            <th align="right">unit</th>
            <th align="right">sum</th>
          </tr>

          {productsInCart.map(productInCart => (
            <TableRow key={productInCart.id} productInCart={productInCart} />
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
              <td align="right">
                {totalShipping.toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </td>
            </tr>
          )}
          <tr>
            <td />
            <td />
            <th align="right">SUBTOTAL</th>
            <th align="right">
              {subTotalPriceInclShipping.toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR',
              })}
            </th>
          </tr>
          <tr>
            <td />
            <td />
            <th align="right">VAT {taxes}%</th>
            <th align="right">
              {totalTaxes.toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR',
              })}
            </th>
          </tr>
          <tr>
            <td />
            <td />
            <th align="right">TOTAL</th>
            <th align="right">
              {totalPrice.toLocaleString('de-DE', {
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
    border-bottom: 1px solid lightgrey;
  }

  td {
    padding: 0.4rem;
    line-height: 1.2rem;
    border-bottom: 1px solid lightgrey;
  }

  td:empty {
    border: 0;
    background-color: var(--background-color);
  }
`;
