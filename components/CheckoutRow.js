import {
  GetWSprice,
  GetSum,
  GetName,
} from '../hooks/useCalculation';

export default function TableRow({ productInCart }) {
  const sum = GetSum(productInCart.id);
  const WSprice = GetWSprice(productInCart.id);
  const name = GetName(productInCart.id);

  return (
    <tr>
      <td align="left">
        <strong>{name}</strong>
      </td>
      <td align="center">{productInCart.quantity}</td>
      <td align="right">
        {WSprice.toLocaleString('de-DE', {
          style: 'currency',
          currency: 'EUR',
        })}
      </td>
      <td align="right">
        {' '}
        {sum.toLocaleString('de-DE', {
          style: 'currency',
          currency: 'EUR',
        })}
      </td>
    </tr>
  );
}
