import Cards from '../components/Cards';
import useStore from '../hooks/useStore';


export default function Home() {
  const products = useStore(state => state.products);

  return (
    <>
      <Cards/>
    </>
  );
  }