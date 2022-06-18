import styled from 'styled-components';
import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';

export default function Header() {
  const hydrated = useHydration();
  const StoreLogo = useStore(state => state.seller.StoreLogo);
  return (
    <>
      {hydrated && (
        <StyledHeader>
          <StyledLogo src={StoreLogo} />
        </StyledHeader>
      )}
    </>
  );
}

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 2rem 1rem rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: var(--nav-height);
  z-index: 2;
  @supports (backdrop-filter: blur(7px)) {
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(7px);
  }
  @media (max-width: 600px) {
    height: var(--nav-height-mobile);
  }
  &.back-office {
    gap: 1rem;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0px 0px 2rem 1rem rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: var(--nav-height);
    z-index: 2;
    @supports (backdrop-filter: blur(7px)) {
      background-color: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(7px);
    }
    @media (max-width: 600px) {
      height: var(--nav-height-mobile);
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
