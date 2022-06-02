import styled from 'styled-components';

const ShortButton = styled.button`
  grid-column: 1/2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  background-color: ${props => props.background};
  border-style: none;
  font-size: 1.2rem;
  text-decoration: none;
  color: ${props => props.textcolor};
  font-weight: 600;
  text-transform: uppercase;
  height: 100%;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 1rem;
  }

  &:disabled {
      color: darkgrey;
      background-color: grey;
  }

`;
export default ShortButton;