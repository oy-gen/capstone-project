import useStore from '../hooks/useStore';
import ProductCard from '../components/ProductCard';
import Nav from '../components/Nav';
import Header from '../components/Header';
import CheckoutTable
 from '../components/CheckoutTable';
export default function Home() {
  const products = useStore(state => state.products);

  return (
    <>
      <Header />
      <CheckoutTable/>
    </>
  );
}

