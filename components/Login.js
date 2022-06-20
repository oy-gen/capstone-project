import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import useHydration from '../hooks/useHydration';
import styled from 'styled-components';
import NavWrapper from './NavWrapper';
import { BigButton } from './Buttons';
import { StyledInput, StyledHeadline } from './FormStyledComponents';

import Toast from './Toast';

export default function Login() {
  const hydrated = useHydration();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, getValues } = useForm();

  // temporary login solution start ------------------------------------ //

  const onSubmit = () => {
    const user = getValues('user');
    const password = getValues('password');
    const buyer = user === 'Tom' && password === '1234';
    const seller = user === 'Eva' && password === '1234';
    {
      buyer
        ? router.push('/shopping')
        : seller
        ? router.push('/backoffice/prices')
        : setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2500);
    }
  };
  // ------------------------------------  temporary login solution end//

  return (
    <>
      {hydrated && (
        <LoginBackground>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledHeadline className="log-in">Login</StyledHeadline>
            <StyledInput
              className="log-in"
              type="text"
              placeholder="user name*"
              {...register('user')}
            />
            <StyledInput
              className="log-in"
              type="password"
              placeholder="password*"
              {...register('password')}
            />
            {open && <Toast message="wrong user name or password" />}
            <NavWrapper>
              <BigButton className="log-in" type="submit">
                Enter
              </BigButton>
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
