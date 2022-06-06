import styled from 'styled-components';
import Link from 'next/link';
import Modal from './Modal';
import NavWrapper from './NavWrapper';
import { useState } from 'react';
import { Button } from './Buttons';
import useStore from '../hooks/useStore';
import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import IconLeft from '../public/icon-left.svg';


export default function CheckoutNav() {
  const [showModal, setShowModal] = useState(false);
  const totals = useStore(state => state.totals);
  const { TotalPrice } = totals;
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
            zIndex: '2',
          }}
        >
          <LinearProgress />
        </Box>
      )}
      <NavWrapper>
        <Link passHref href="/">
          <Button
            background="transparent"
            textcolor="var(--text-maincolor)"
            gridcolumn="1/2"
          >
            <IconLeft width='20px' height='19px' />
          </Button>
        </Link>
        <Button
          gridcolumn="2/4"
          background="var(--text-maincolor)"
          textcolor="white"
          disabled={loading}
          onClick={handleButtonClick}
        >
          submit order:{' '}
          {TotalPrice.toLocaleString('de-DE', {
            style: 'currency',
            currency: 'EUR',
          })}
        </Button>
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
