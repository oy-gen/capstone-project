import Header from '../components/Header';
import CheckoutTable from '../components/CheckoutTable';
import CheckoutNav from '../components/CheckoutNav';
import CheckoutAddress from '../components/CheckoutAddress';

export default function Checkout() {
  return (
    <section>
      <Header />
      <CheckoutAddress />
      <CheckoutTable />
      <CheckoutNav />
    </section>
  );
}
