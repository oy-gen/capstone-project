import styled, { keyframes } from 'styled-components';
import { FadeInOut } from './GlobalStyle';

export default function Toast({ message }) {
  return (
    <>
      <StyledToastContainer>{message}</StyledToastContainer>
    </>
  );
}

const StyledToastContainer = styled.div`
  place-self: center;
  white-space: nowrap;
  opacity: 0;
  font-weight: 600;
  display: flex;
  height: 2rem;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-shadow: 0px 0px 2rem 1rem rgba(0, 0, 0, 0.25);
  background-color: var(--signal-color);
  color: white;

  animation-name: ${FadeInOut};
  animation-direction: linear;
  animation-duration: 2.5s;
`;
