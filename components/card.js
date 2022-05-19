import styled from 'styled-components';

export default function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

const StyledCard = styled.div`
  grid-column: 2/3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: darkgrey;
  padding: 1rem 3rem;
  gap: 1rem;
  border-radius: 20px;
`;
