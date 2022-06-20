import React from 'react';
import useHydration from '../../hooks/useHydration';
import SellersProductCard from '../../components/PricesProductCard';
import useStore from '../../hooks/useStore';
import Link from 'next/link';
import NavWrapper from '../../components/NavWrapper';
import LogoutIcon from '../../public/logout-white.svg';
import SettingsIcon from '../../public/settings2-icon.svg';
import { StyledHeader } from '../../components/Header';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import {
  BigButton,
  SmallButton,
  ContentWrapper,
} from '../../components/Buttons';

export default function Home() {
  const onSubmit = data => console.log(data);
  const products = useStore(state => state.products);
  const hydrated = useHydration();
  const methods = useForm();
  const _onSubmit = data => {
    const input = getValues('WSprice');
    const cleanNumber = GetCleanNumber(input);
    setWSprice(id, cleanNumber);
  };

  // function triggerToast() {
  //   if (errors) {
  //     setOpen(true);
  //     setTimeout(() => {
  //       setOpen(false);
  //     }, 2500);
  //   }
  // }

  return (
    <section>
      {hydrated && (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {products.map((product, index) => (
            <SellersProductCard
              key={product.id}
              product={product}
              //{...methods.register(`${product.id}`)}
            />
          ))}
        </form>
      )}
    </section>
  );
}
