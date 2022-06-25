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
  height: var(--nav-height-mobile);
  background-color: black; // for browsers other than chrome
`;

const NavElementWrapper = styled.div`
  display: grid;
  align-items: stretch;

  grid-template-columns: 1.2fr 2fr;
  width: 800px;
`;
