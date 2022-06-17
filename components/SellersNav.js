import Link from 'next/link';
import styled from 'styled-components';
import useHydration from '../hooks/useHydration';
import NavWrapper from './NavWrapper';
import { BigButton, SmallButton } from './Buttons';
import Icon from '../public/logout.svg';

export default function SellersNav(type) {
  const hydrated = useHydration();

  return (
    <>
      {hydrated && (
        <NavWrapper>
          <Link passHref href="/">
            <SmallButton className="back-office">
              <Icon />
            </SmallButton>
          </Link>
          <BigButton type="submit">PROCEED</BigButton>
        </NavWrapper>
      )}
    </>
  );
}
