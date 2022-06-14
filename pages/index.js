import Header from '../components/Header';
import { useSession, signIn, signOut } from 'next-auth/react';
import React from 'react';
import useHydration from '../hooks/useHydration';
import styled from 'styled-components';
import NavWrapper from '../components/NavWrapper';
import { LoginButton } from '../components/Buttons';
import { StyledWarning } from '../components/FormStyledComponents';

export default function Home() {
  const hydrated = useHydration();
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <Header />
      <>
        {hydrated && (
          <LoginBackground>
            <StyledHeadlineLogin>Login</StyledHeadlineLogin>

            <StyledInputLogin placeholder="Email*" />

            <StyledInputLogin placeholder="password*" />
           
            <NavWrapper>
              <LoginButton  onClick={() => signIn('Credentials')}>start</LoginButton>
            </NavWrapper>
          </LoginBackground>
        )}
      </>
    </>
  );
}

const LoginBackground = styled.div`
  background-image: url('https://cdn.shopify.com/s/files/1/0002/7502/1865/files/Burning-Buddha-Candles-Coin-of-Wisdom.jpg?v=1613518249');
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: darken;
  height: 100vh;
  background-position: 50% 60%;
  background-repeat: no-repeat;
  background-size: 230%;
  position: relative;
  padding: 0 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeadlineLogin = styled.h2`
  text-align: center;
  margin: 30px auto 30px;
  color: white;
`;

export const StyledInputLogin = styled.input`
  width: 100%;
  font-size: 1rem;
  line-height: 2rem;
  border-style: none;
  background-color: rgb(255, 255, 255, 0.3);
  border-bottom: 1px solid lightgrey;
  padding: 10px 120px 10px 10px;
  margin-bottom: 1rem;
  color: white;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgb(255, 255, 255, 0.6);
  }

  &:focus {
    border-style: none;
    outline: none;
    border-bottom: 2px solid white;
  }
`;
