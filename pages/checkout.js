import Header from '../components/Header';
import CheckoutTable from '../components/CheckoutTable';
import CheckoutNav from '../components/CheckoutNav';
import CheckoutAddress from '../components/CheckoutAddress';

export default function Checkout() {
  return (
    <>
      <Header />
      <CheckoutAddress />
      <CheckoutTable />
      <CheckoutNav />
    </>
  );
}
