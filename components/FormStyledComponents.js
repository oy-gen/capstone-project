import styled from 'styled-components';

export const StyledHeadline = styled.h2`
  text-align: center;
  margin: 25px auto 25px;
`;

export const StyledInput = styled.input`
  width: 90vw;
  font-size: 1rem;
  line-height: 1.6rem;
  border-style: none;
  background-color: transparent;
  border-bottom: 1px solid lightgrey;
  padding: 5px 120px 0 0;
  margin-bottom: 1rem;
  color: var(--text-darkcolor);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--text-lightcolor);
  }

  &:focus {
    border-style: none;
    outline: none;
    border-bottom: 2px solid var(--accent-color);
  }
  /*------------------------- back-office-style-------------------------*/
  &.back-office {
    height: 40px;
    border-style: none;
    background-color: var(--background-color);
    border: 1px solid var(--accent-color);
    margin: 5px 0;
    padding: 5px 16px;
    color: var(--accent-color);

    ::placeholder,
    ::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0.2);
      font-weight: 200;
    }

    &:focus {
      border-style: none;
      outline: none;
      outline: 2px solid var(--accent-color);
    }
  }
  /*------------------------- back-office-short style----------------------*/
  &.back-office--short {
    font-weight: 600;
    text-align: center;
    height: 40px;
    width: 90px;
    border-style: none;
    background-color: var(--background-color);
    border: 1px solid var(--accent-color);
    margin: 5px 0;
    padding: 5px 0;
    color: var(--accent-color);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0.2);
      font-weight: 200;
    }

    &:focus {
      border-style: none;
      outline: none;
      outline: 2px solid var(--accent-color);
    }
  }
`;

export const StyledWarning = styled.p`
  position: absolute;
  color: var(--signal-color);
  margin: -37px 8px 0 0;
  right: 1rem;
`;
