import styled from 'styled-components';

export const StyledHeadline = styled.h2`
  text-align: center;
  margin: 25px auto;
  &.log-in {
    margin: 35px auto;
    color: white;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6rem;
  border-style: none;
  background-color: transparent;
  border-bottom: 1px solid lightgrey;
  padding: 5px 0;
  margin-bottom: 1rem;
  color: var(--accent-color);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: gray;
  }
  &:focus {
    border-style: none;
    outline: none;
    border-bottom: 2px solid var(--accent-color);
  }
  //---------------------------------------------------   className back-office
  &.back-office {
    height: 40px;
    background-color: var(--background-color);
    border: 1px solid var(--accent-color);
    margin: 5px 0;
    padding: 5px 16px;
    color: var(--accent-color);

    ::placeholder,
    ::-webkit-input-placeholder {
      color: var(--gray-translucent);
      font-weight: 200;
    }

    &:focus {
      outline: 2px solid var(--accent-color);
    }
  }
  //---------------------------------------------------   className back-office--short
  &.back-office--short {
    font-weight: 600;
    text-align: center;
    height: 40px;
    width: 90px;
    background-color: var(--background-color);
    border-bottom: 1px solid var(--accent-color);
    margin: 5px 0;
    padding: 5px 0;
    color: var(--accent-color);

    ::placeholder,
    ::-webkit-input-placeholder {
      color: var(--gray-translucent);
      font-weight: 200;
    }

    &:focus {
      outline: 2px solid var(--accent-color);
    }
  }
  //---------------------------------------------------   className log-in
  &.log-in {
    background-color: rgb(255, 255, 255, 0.3);
    padding: 10px;
    margin-bottom: 1rem;
    color: white;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    &:focus {
      border-bottom: 2px solid white;
    }
  }
`;

export const StyledWarning = styled.p`
  position: absolute;
  color: var(--signal-color);
  margin: -37px 8px 0 0;
  right: 1rem;
`;
