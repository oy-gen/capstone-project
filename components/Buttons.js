import styled from 'styled-components';

export const Button = styled.button`
  grid-column: ${props => props.gridcolumn};
  background-color: ${props => props.background};
  color: ${props => props.textcolor};
  &:disabled {
    color: darkgrey;
    background-color: grey;
  }
`;

export const SmallSquareButton = styled.button`
  border: 1px solid var(--text-lightcolor);
  height: 40px;
  width: 40px;
  padding: 0 0.6rem;
  text-transform: uppercase;
  color: var(--text-lightcolor);
  cursor: pointer;
`;

export const StyledCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: 1px solid var(--text-lightcolor);
  height: 1.6rem;
  width: 1.6rem;
  color: var(--text-lightcolor);
`;
