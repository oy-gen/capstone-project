import styled from 'styled-components';

export const StyledHeadline = styled.h2`
  text-align: center;
  margin: 30px auto 30px;
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
`;

export const StyledWarning = styled.p`
  position: absolute;
  color: var(--signal-color);
  margin: -37px 8px 0 0;
  right: 1rem;
`;
