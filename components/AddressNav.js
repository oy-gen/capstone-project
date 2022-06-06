import styled from 'styled-components';
import Link from 'next/link';
import NavWrapper from './NavWrapper';
import { useState } from 'react';
import { Button } from './Buttons';
import useStore from '../hooks/useStore';
import * as React from 'react';
import IconLeft from '../public/icon-left.svg';

export default function AddressNav() {
  const [showModal, setShowModal] = useState(false);
  const totals = useStore(state => state.totals);

  const [loading, setLoading] = React.useState(false);

  return (
    <>
      <NavWrapper>
        <Link passHref href="/">
          <Button
            background="transparent"
            textcolor="var(--text-maincolor)"
            gridcolumn="1/2"
          >
            <IconLeft width="20px" height="19px" />
          </Button>
        </Link>
        <Link passHref href="/checkout">
          <Button
            type="submit"
            gridcolumn="2/4"
            background="var(--text-maincolor)"
            textcolor="white"
          >
            proceed to Overview
          </Button>
        </Link>
      </NavWrapper>
    </>
  );
}
