import styled from 'styled-components';
import useStore from '../hooks/useStore';

export default function CheckoutTable() {
  const products = useStore(state => state.products);
  const productsInCart = products.filter(product => product.quantity !== 0);
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
            <td align="left">{product.name}</td>
            <td align="center">{product.quantity}</td>
            <td align="right">
              {product.RRPprice.toLocaleString('de-DE', {
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
        ,
      </StyledTable>
    </>
  );
}

const StyledTable = styled.table`
  color: var(--text-maincolor);
  font-weight: 300;
  padding: 1rem;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  th {
    text-align: ${props => props.align};
  }
`;

const TableHeaderLeft = styled.th`
  text-align: left;
`;

const FlexWrapper = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  display: flex;
  justify-content: space-between;
`;

const ExtraInfoWrapper = styled.div`
  padding: 1rem;
  column-count: 2;
  max-width: 1000px;
  margin: auto;
  @media (max-width: 600px) {
    column-count: 1;
  }
`;

const StyledMoreInfoButton = styled.button`
  color: var(--text-lightcolor);
  border-style: none;
  text-align: left;
  font-weight: 300;
  padding-right: 0.8rem;
  text-transform: uppercase;
  text-decoration: underline;
`;

const StyledImage = styled.img`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  max-width: 300px;
  width: 100%;
`;
