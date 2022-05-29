import useStore from '../hooks/useStore';
import ProductCard from '../components/ProductCard';
import Nav from '../components/Nav';

export default function Home() {
  const products = useStore(state => state.products);

  return (
    <>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Nav></Nav>
    </>
  );
}
