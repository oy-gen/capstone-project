import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';
import styled from 'styled-components';
import NavWrapper from './NavWrapper';
import { LoginButton } from './Buttons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledWarning } from './FormStyledComponents';

export default function Login() {
  const hydrated = useHydration();
  const router = useRouter();
  const setBuyerData = useStore(state => state.setBuyerData);
  const buyer = useStore(state => state.buyer);

  const schema = yup
    .object({
      // DifferentShipping: yup.boolean(),
      BuyerEmail: yup
        .string()
        .trim()
        .required('required')
        .max(20, '${max} characters max'),
      BuyerPassword: yup
        .string()
        .trim()
        .required('required')
        .max(30, '${max} characters max'),
    })
    .required();

  const { BuyerEmail } = buyer;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    setBuyerData(data);
    router.push('/shopping');
  };

  return (
    <>
      {hydrated && (
        <LoginBackground>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledHeadlineLogin>Login</StyledHeadlineLogin>

            <div>
              <StyledInputLogin
                placeholder="Email*"
                defaultValue={BuyerEmail}
                {...register('BuyerEmail')}
              />
              <StyledWarning>{errors?.BuyerEmail?.message}</StyledWarning>

              <StyledInputLogin
                placeholder="password*"
                defaultValue="******"
                {...register('BuyerPassword')}
              />
              <StyledWarning>{errors?.BuyerPassword?.message}</StyledWarning>
            </div>
            <NavWrapper>
              <LoginButton type="submit">start</LoginButton>
            </NavWrapper>
          </form>
        </LoginBackground>
      )}
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
