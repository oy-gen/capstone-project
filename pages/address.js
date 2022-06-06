import useStore from '../hooks/useStore';
import Header from '../components/Header';
import AddressForm from '../components/AddressForm';
import AddressNav from '../components/AddressNav'

export default function Home() {

  return (
    <>
      <Header />
<AddressForm/>
<AddressNav/>
    </>
  );
}
