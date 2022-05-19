import styled from 'styled-components';
import Link from 'next/link';

export default function Nav() {
  return (
    <NavContainer>
      <Button>
        <Link href="/">
          <a>Rooms</a>
        </Link>
      </Button>

      <Button>
        <Link href="/flatmates">
          <a>Flatmates</a>
        </Link>
      </Button>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 1rem 1fr 1rem 1fr 1rem;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 1rem;

  position: fixed;
  bottom: 0px;
  width: 100vw;
`;
const Button = styled.button`
  padding: 1rem 0;
  grid-column: span 2;
  background-color: black;
  border-style: none;
  border-radius: 5px;
  & a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    padding: 1rem;
  }
`;
