import Header from '../components/Header';
import CheckoutTable from '../components/CheckoutTable';
import CheckoutNav from '../components/CheckoutNav';
import CheckoutAddressSection from '../components/CheckoutAddressSection';

export default function Checkout() {
  return (
    <>
      <Header />
      <CheckoutAddressSection />
      <CheckoutTable />
      <CheckoutNav />
    </>
  );
}
