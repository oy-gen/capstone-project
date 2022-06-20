import styled from 'styled-components';
import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';

export default function Header() {
  const hydrated = useHydration();
  const logoImage = useStore(state => state.seller.logoImage);
  return (
    <>
      {hydrated && (
        <StyledHeader>
          <StyledLogo src={logoImage} />
        </StyledHeader>
      )}
    </>
  );
}

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--box-shadow);
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: var(--nav-height);
  z-index: 2;
  background-color: var(
    --white-translucent-09
  ); // for browsers other than chrome
  @supports (backdrop-filter: var(--background-blur)) {
    background-color: var(--white-translucent);
    backdrop-filter: var(--background-blur);
  }
  @media (max-width: 600px) {
    height: var(--nav-height-mobile);
  }
  &.back-office {
    gap: 1rem;
    background-color: var(--black-translucent);
    @supports (backdrop-filter: var(--background-blur)) {
      background-color: var(--black-translucent);
    }
  }
`;

const StyledLogo = styled.img`
  max-width: 400px;
  max-height: 100px;
  @media (max-width: 600px) {
    max-width: 70vw;
    max-height: calc(var(--nav-height-mobile) - 1rem);
  }
`;
