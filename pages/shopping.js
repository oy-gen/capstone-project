import useStore from '../hooks/useStore';
import ProductCard from '../components/ProductCard';
import ShoppingNav from '../components/ShoppingNav';
import Header from '../components/Header';

export default function Home() {
  const products = useStore(state => state.products);

  return (
    <section>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Header />
      <ShoppingNav />
    </section>
  );
}
