/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import useStore from '../hooks/useStore';
import Link from 'next/link';
import Modal from './Modal';
import { useState } from 'react';
import Image from 'next/image';

export default function NavCheckout() {
  const TotalPrice = useStore(state => state.totals.TotalPrice);
  const [showModal, setShowModal] = useState(false);

  return (
    <NavBottom>
      <NavElementWrapper>
        <Link passHref href="/">
          <Button>
            <svg
              width="20"
              height="19"
              viewBox="0 0 16 15"
              fill="var(--text-maincolor)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6.00125H3.14L6.77 1.64125C6.93974 1.43704 7.0214 1.17375 6.99702 0.909329C6.97264 0.644902 6.84422 0.400991 6.64 0.231252C6.43578 0.0615137 6.1725 -0.0201482 5.90808 0.0042315C5.64365 0.0286112 5.39974 0.157036 5.23 0.361252L0.23 6.36125C0.196361 6.40898 0.166279 6.45911 0.14 6.51125C0.14 6.56125 0.14 6.59125 0.0700002 6.64125C0.0246737 6.75591 0.000941121 6.87796 0 7.00125C0.000941121 7.12454 0.0246737 7.24659 0.0700002 7.36125C0.0700002 7.41125 0.0699999 7.44125 0.14 7.49125C0.166279 7.54339 0.196361 7.59353 0.23 7.64125L5.23 13.6413C5.32402 13.7541 5.44176 13.8449 5.57485 13.9071C5.70793 13.9694 5.85309 14.0015 6 14.0013C6.23365 14.0017 6.46009 13.9203 6.64 13.7713C6.74126 13.6873 6.82496 13.5842 6.88631 13.4679C6.94766 13.3515 6.98546 13.2242 6.99754 13.0932C7.00961 12.9622 6.99573 12.8302 6.95669 12.7046C6.91764 12.579 6.8542 12.4623 6.77 12.3613L3.14 8.00125H15C15.2652 8.00125 15.5196 7.8959 15.7071 7.70836C15.8946 7.52082 16 7.26647 16 7.00125C16 6.73604 15.8946 6.48168 15.7071 6.29415C15.5196 6.10661 15.2652 6.00125 15 6.00125Z"
                fill="var(--text-maincolor)"
              />
            </svg>
            Shop more
          </Button>
        </Link>
        <MainButton onClick={() => setShowModal(true)}>
          <ButtonTextWrapper>submit order: </ButtonTextWrapper>
          <h2 style={{ color: 'white' }}>
            {TotalPrice.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'EUR',
            })}
          </h2>
        </MainButton>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
          title="Thank you!"
        >
          <Message>
            Your order has been trasmitted to our logistics center. You will
            receive a shipping confirmation shortly.
          </Message>
          <Link href="/">Back to main page</Link>
          <img
            width="60px"
            height="60px"
            alt=""
            src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-11.jpg"
          ></img>
        </Modal>
      </NavElementWrapper>
    </NavBottom>
  );
}

const NavBottom = styled.nav`
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 2rem 1rem rgba(0, 0, 0, 0.25);
  position: fixed;
  bottom: -3px;
  right: 0px;
  width: 100vw;
  height: var(--nav-height);
  background-color: rgba(255, 255, 255, 0.9);
  @supports (backdrop-filter: blur(7px)) {
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(7px);
  }
  @media (max-width: 600px) {
    height: var(--nav-height-mobile);
  }
`;

const ButtonTextWrapper = styled.div`
  width: 50px;
`;

const NavElementWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  width: 800px;
  @media (max-width: 600px) {
    grid-template-columns: 136px 1fr;
  }
`;

const Message = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding: 1rem 1rem;
  text-align: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  padding: 1rem 1.6rem;
  background-color: transparent;
  border-style: none;
  text-decoration: none;
  flex-wrap: nowrap;
  color: 'var(--text-maincolor)';
  font-weight: 600;
  text-transform: uppercase;
  height: 100%;
  width: 100%;
`;

const MainButton = styled.button`
  display: flex;
  justify-content: left;
  flex-wrap: nowrap;
  align-items: center;
  text-align: left;
  gap: 1rem;
  padding: 1rem 1.6rem;
  background-color: black;
  border-style: none;
  text-decoration: none;
  flex-wrap: wrap;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  height: 100%;
  width: 100%;
`;
