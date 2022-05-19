import styled, { css } from 'styled-components';
import Card from '../components/card';
import useStore from '../hooks/useStore';
import Nav from '../components/nav';
import Link from 'next/link';

export default function Home() {
  const products = useStore(state => state.products);

  return (
    <CardContainer>
      {products.map(product => (
        <Card key={product.id} name={product.name}>
          <Link href="/">
            <h2>{product.name}</h2>
          </Link>
          <StyledImage src={product.image} alt={product.name} />
        </Card>
      ))}
      <Nav></Nav>
    </CardContainer>
  );
}

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledDisplay = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  outline: 2px solid blac´k;
  background-color: red;
  transition: background 0.5s;

  ${({ status = false }) => {
    return css`
      background: ${status ? 'green' : 'red'};
    `;
  }}
`;

const CardContainer = styled.div`
  _width: 100%;
  _height: 100vh;
  display: grid;
  grid-template-columns: 1rem 1fr 1rem;
  gap: 1rem;
`;

const StyledImage = styled.img`
  width: 100px;
`;
