import useStore from '../hooks/useStore';
import Header from '../components/Header';
import CheckoutTable from '../components/CheckoutTable';
import NavCheckout from '../components/NavCheckout';

export default function Checkout() {
  const products = useStore(state => state.products);

  return (
    <>
      <Header />
      <CheckoutTable />
      <NavCheckout />
    </>
  );
}
