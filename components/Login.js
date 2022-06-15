import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import useHydration from '../hooks/useHydration';
import styled from 'styled-components';
import NavWrapper from './NavWrapper';
import { LoginButton } from './Buttons';

import Toast from './Toast';

export default function Login() {
  const hydrated = useHydration();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, getValues } = useForm();

  // START ---------------------  This is a temporary login solution //

  const onSubmit = () => {
    const user = getValues('user');
    const password = getValues('password');
    if (password === '1234' && user === 'Tom') {
      router.push('/shopping');
    } else {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2500);
    }
  };

  // END ---------------------  This is a temporary login solution //

  return (
    <>
      {hydrated && (
        <LoginBackground>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledHeadlineLogin>Login</StyledHeadlineLogin>
            <StyledInputLogin
              type="text"
              placeholder="user name*"
              {...register('user')}
            />

            <StyledInputLogin
              type="password"
              placeholder="password*"
              {...register('password')}
            />

            {open && <Toast message="wrong user name or password" />}
            <NavWrapper>
              <LoginButton type="submit">Enter</LoginButton>
            </NavWrapper>
          </form>
        </LoginBackground>
      )}
    </>
  );
}

const LoginBackground = styled.div`
  background-image: url('https://cdn.shopify.com/s/files/1/0002/7502/1865/files/Burning-Buddha-Candles-Coin-of-Wisdom.jpg?v=1613518249');
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
  overflow: hidden;
  height: calc(100vh - (2 * var(--nav-height-mobile)));
  background-position: 50% 55%;
  background-size: 230%;
  padding: 0 1rem 2rem;
`;

const StyledHeadlineLogin = styled.h2`
  text-align: center;
  margin: 2rem auto 2rem;
  color: white;
`;

const StyledInputLogin = styled.input`
  width: 100%;
  font-size: 1rem;
  line-height: 2rem;
  border-style: none;
  background-color: rgb(255, 255, 255, 0.4);
  border-bottom: 1px solid lightgrey;
  padding: 10px 120px 10px 10px;
  margin-bottom: 1rem;
  color: white;

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
