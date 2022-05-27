import styled from 'styled-components';
import useStore from '../hooks/useStore';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const products = useStore(state => state.products);

  return (
    <>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

