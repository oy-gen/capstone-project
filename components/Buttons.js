import styled from 'styled-components';

export const ButtonM = styled.button`
  grid-column: 1/2;
  background-color: ${props => props.background};
  color: ${props => props.textcolor};
  &:disabled {
    color: darkgrey;
    background-color: grey;
  }
`;

export const ButtonL = styled.button`
  grid-column: 2/4;
  background-color: ${props => props.background};
  color: ${props => props.textcolor};
`;
