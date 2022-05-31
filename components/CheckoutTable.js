import styled from 'styled-components';
import useStore from '../hooks/useStore';

export default function CheckoutTable() {
  const products = useStore(state => state.products);
  const productsInCart = products.filter(product => product.quantity !== 0);
  const SubTotalPrice = useStore(state => state.SubTotalPrice);
  const TotalShipping = useStore(state => state.TotalShipping);
  const Taxes = useStore(state => state.Taxes);
  const SubTotalPriceInclShipping = SubTotalPrice + TotalShipping;
  const TotalTaxes = SubTotalPriceInclShipping * (Taxes / 100);

  return (
    <>
      <StyledTable>
        <tr>
          <th align="left">product name</th>
          <th align="center">QTY</th>
          <th align="right">unit price</th>
          <th align="right">total price</th>
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
        <tr>
          <th />
          <th />
          <th align="right">Subtotal</th>
          <th align="right">
            {SubTotalPrice.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'EUR',
            })}
          </th>
        </tr>
        <tr>
          <th />
          <th />
          <th align="right">Shipping</th>
          <th align="right">
            {TotalShipping.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'EUR',
            })}
          </th>
        </tr>
        <tr>
          <th />
          <th />
          <th align="right">VAT {Taxes}%</th>
          <th align="right">
            {TotalTaxes.toLocaleString('de-DE', {
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
  padding: 1rem 0;
  border-collapse: collapse;
  color: var(--text-maincolor);
  font-weight: 300;
  width: 100%;
  border-spacing: 0;
  @media (max-width: 600) {
  }

  tr {
    height: 3.6rem;
    height: 1.2 rem;
  }

  tr:nth-child(even) {
    background-color: white;
  }

  th {
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 0.4rem;
    color: (--text-maincolor);
    border-bottom: 2px solid var(--text-maincolor);
    text-align: ${props => props.align};
  }

  td {
    font-size: 0.9rem;
    padding: 0.4rem;
    line-height: 1.2rem;
    border-bottom: 1px solid var(--text-lightcolor);
  }
  td:empty {
    visibility: hidden;
  }
  tr:last-child {
    border-bottom: 2px solid var(--text-maincolor);
  }
`;
