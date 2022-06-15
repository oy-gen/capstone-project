import styled from 'styled-components';
import useStore from '../hooks/useStore';
import { useFullInfo } from '../hooks/useCalculation';
import { GetTotals } from '../hooks/useCalculation';
import CheckoutAddressSection from './CheckoutAddressSection';

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