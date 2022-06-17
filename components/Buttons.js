import styled from 'styled-components';

export const SmallButton = styled.button`
  justify-content: center;
  grid-column: 1/2;
  background-color: transparent;
  color: var(--text-maincolor);
  padding: 0 16px;
  &:disabled {
    color: darkgrey;
    background-color: #555555;
  }
  &.back-office {
    background-color: rgb(0, 0, 0, 0.7);
  }
`;

export const BigButton = styled.button`
  grid-column: 2/4;
  background-color: rgb(0, 0, 0, 0.9);
  color: white;
  padding: 0 16px;
  &:disabled {
    color: darkgrey;
    background-color: #555555;
  }
  :active {
    background-color: var(--text-maincolor);
    color: white;
  }
  &.log-in {
    grid-column: 1/4;
    justify-content: center;
  }
`;

export const SmallSquareButton = styled.button`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--text-lightcolor);
  height: 40px;
  width: 40px;
  color: var(--text-lightcolor);

  :active {
    background-color: lightgrey;
  }
  &.save-button {
    background-color: rgba(0, 0, 0, 0.8);
    border: 2px solid var(--accent-color);
    :active {
      outline: 2px solid var(--accent-color);
      background-color: black;
    }
  }
`;
