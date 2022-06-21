import styled from 'styled-components';
import { useFullInfo } from '../hooks/useCalculation';
import useStore from '../hooks/useStore';

export default function QuantityIndicator({ quantity }) {
  const seller = useStore(state => state.seller);
  const { maxItems } = seller;
  const quantityFraction = 110 / maxItems;
  const width = quantityFraction * quantity;

  return <StyledIndicator width={width} />;
}

const StyledIndicator = styled.div`
  grid-column: 1/3;
  position: absolute;
  left: -10px;
  height: 89%;
  background: red;
  width: ${props => props.width}%;
  mix-blend-mode: multiply;
  opacity: 0.6;
  z-index: -1;
  transition: width 0.5s;
  filter: blur(6px);
  background: linear-gradient(to right, #729c98 0%, lightgrey 140%);
`;
