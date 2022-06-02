import useStore from '../hooks/useStore';
import Header from '../components/Header';
import CheckoutTable from '../components/CheckoutTable';
import CheckoutNav from '../components/CheckoutNav';

export default function Checkout() {
  const products = useStore(state => state.products);

  return (
    <>
      <Header />
      <CheckoutTable />
      <CheckoutNav />
    </>
  );
}