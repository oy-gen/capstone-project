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
    background-color: var(--black-translucent);
    border-right: 1px solid var(--text-middlecolor);
    :active {
      background-color: var(--text-maincolor);
      color: white;
    }
  }
`;

export const BigButton = styled.button`
  grid-column: 2/4;
  background-color: var(--black-translucent);
  color: white;
  padding: 0 16px;
  &:disabled {
    color: darkgrey;
    background-color: #555555;
  }
  :active {
    background-color: var(--text-maincolor);
  }
  &.log-in {
    grid-column: 1/4;
    justify-content: center;
    :active {
      background-color: var(--text-maincolor);
    }
  }
`;

export const ContentWrapper = styled.div`
  text-align: left;
  align-self: center;
  justify-self: left;
`;

export const SmallSquareButton = styled.button`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--text-middlecolor);
  height: 40px;
  width: 40px;
  color: var(--text-lightcolor);

  :active {
    background-color: lightgrey;
  }
  &.save-button {
    background-color: var(--background-color);
    border: 1px solid var(--accent-color);
    :active {
      outline: 2px solid var(--accent-color);
      background-color: white;
    }
  }
`;
