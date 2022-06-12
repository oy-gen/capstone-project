import styled from 'styled-components';
import Link from 'next/link';
import Modal from './Modal';
import NavWrapper from './NavWrapper';
import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconLeft from '../public/icon-left.svg';
import { BigButton, SmallButton } from './Buttons';
import { GetTotals } from './Calculations';

export default function CheckoutNav() {
  const [showModal, setShowModal] = useState(false);
  const { totalPrice } = GetTotals();
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setShowModal(true);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <>
      {loading && (
        <Box
          sx={{
            width: '100%',
            position: 'fixed',
            bottom: 'var(--nav-height-mobile)',
            zIndex: '200',
          }}
        ></Box>
      )}
      <NavWrapper>
        <Link passHref href="/address">
          <SmallButton>
            <IconLeft />
          </SmallButton>
        </Link>
        <BigButton disabled={loading} onClick={handleButtonClick}>
          <Wrapper>
            submit order
            <h5>
              Total price:{' '}
              {totalPrice.toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR',
              })}
            </h5>
          </Wrapper>
        </BigButton>
        <Modal onClose={() => setShowModal(false)} show={showModal}>
          <h2>Thank you!</h2>
          <Message>
            Your order has been trasmitted. You will receive a confirmation
            email shortly.
          </Message>
          <Link href="/">Back to main page</Link>
        </Modal>
      </NavWrapper>
    </>
  );
}

const Message = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding: 1rem 1rem;
  text-align: center;
`;

const Wrapper = styled.div`
  text-align: left;
  align-self: center;
  justify-self: left;
`;
