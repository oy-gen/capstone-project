import Header from '../components/Header';
import React from 'react';
import useHydration from '../hooks/useHydration';
import Login from '../components/Login';

export default function Home() {
  const hydrated = useHydration();

  return (
    <>
      {hydrated && (
        <>
          <Header />
          <Login />
        </>
      )}
    </>
  );
}

// fetch working but too slow



// import Header from '../components/Header';
// import React from 'react';
// import useHydration from '../hooks/useHydration';
// import Login from '../components/Login';
// import parseProducts from '../hooks/parseProducts';
// import client from '../lib/shopify-client';
// import useStore from '../hooks/useStore';
// import { useEffect } from 'react';


// export default function Home(props) {
//   const hydrated = useHydration();

//   const setProducts = useStore(state => state.setProducts);
//   const newProducts = parseProducts(props.products);

//   useEffect(() => {
//     setProducts(newProducts);
//   }, [setProducts, newProducts]);

//   return (
//     <>
//       {hydrated && (
//         <>
//           <Header />
//           <Login />
//         </>
//       )}
//     </>
//   );
// }

// export async function getServerSideProps(context) {
//   const fetchedProducts = await client.product.fetchQuery({
//     query: 'available_for_sale:true',
//   });

//   return {
//     props: {
//       products: JSON.parse(JSON.stringify(fetchedProducts)),
//     },
//   };
// }
