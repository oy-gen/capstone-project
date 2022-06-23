import React from 'react';
import useHydration from '../../hooks/useHydration';
import NewPricesCard from '../../components/NewPricesCard';
import useStore from '../../hooks/useStore';
import NavWrapper from '../../components/NavWrapper';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Icon from '../../public/logout-white.svg';
import HeaderBackOffice from '../../components/HeaderBackOffice';
import {
  BigButton,
  SmallButton,
  ContentWrapper,
} from '../../components/Buttons';

export default function Home() {
  const hydrated = useHydration();
  const router = useRouter();
  const products = useStore(state => state.products);
  const setPrices = useStore(state => state.setPrices);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const newData = Object.values(data);
    setPrices(newData);
    router.push('/backoffice/conditions');
  };

  return (
    <section>
      {hydrated && (
        <>
          <HeaderBackOffice>
            <h5 className="h5--light">Wholesale Prices</h5>
          </HeaderBackOffice>
          <form onSubmit={handleSubmit(onSubmit)}>
            {products.map((p, index) => (
              <NewPricesCard
                key={index}
                product={p}
                index={index}
                register={register}
                errors={errors}
                setValue={setValue}
              />
            ))}
            <NavWrapper>
              <Link passHref href="/">
                <SmallButton className="back-office">
                  <Icon />
                </SmallButton>
              </Link>
              <BigButton type="submit" disabled={errors.WSprice}>
                <ContentWrapper>
                  SAVE and PROCEED
                  <h5>to order conditions</h5>
                </ContentWrapper>
              </BigButton>
            </NavWrapper>
          </form>
        </>
      )}
    </section>
  );
}
