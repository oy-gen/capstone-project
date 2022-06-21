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
  box-shadow: var(--box-shadow);
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 100vw;
  height: var(--nav-height);
  background-color: var( --white-translucent-09);   // for browsers other than chrome
  @supports (backdrop-filter: var(--background-blur)) {
    background-color: var(--white-translucent);
    backdrop-filter: var(--background-blur);
  }
  @media (max-width: 600px) {
    height: var(--nav-height-mobile);
  }
`;

const NavElementWrapper = styled.div`
  display: grid;
  align-items: stretch;

  grid-template-columns:  1.2fr 2fr;
  width: 800px;

`;
