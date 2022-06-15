import { useFullInfo } from '../hooks/useCalculation';

export default function TableRow({ productInCart }) {
  const fullInfo = useFullInfo(productInCart.id);
  return (
    <tr>
      <td align="left">
        <strong>{fullInfo.name}</strong>
      </td>
      <td align="center">{productInCart.quantity}</td>
      <td align="right">
        {fullInfo.WSprice.toLocaleString('de-DE', {
          style: 'currency',
          currency: 'EUR',
        })}
      </td>
      <td align="right">
        {' '}
        {fullInfo.sum.toLocaleString('de-DE', {
          style: 'currency',
          currency: 'EUR',
        })}
      </td>
    </tr>
  );
}
