import styled from 'styled-components';

export default function NavWrapper({ children }) {
  return (
    <Nav>
      <NavElementWrapper>{children}</NavElementWrapper>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 2rem 1rem rgba(0, 0, 0, 0.25);
  position: fixed;
  bottom: 0px;
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

const NavElementWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1.2fr 2fr;
  width: 800px;
  @media (max-width: 600px) {
    grid-template-columns: 1.2fr 2fr;
  }
`;
