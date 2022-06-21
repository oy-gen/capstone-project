import { useForm } from 'react-hook-form';
import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';
import styled from 'styled-components';
import Link from 'next/link';
import Toast from './Toast';
import NavWrapper from './NavWrapper';
import BackIcon from '../public/icon-left.svg';
import { BigButton, SmallButton, ContentWrapper } from './Buttons';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaConditions } from './FormValidation';
import { GetCleanNumber } from '../hooks/useCalculation';
import React, { useState, useRef, useEffect } from 'react';
import { Box, LinearProgress } from '@mui/material';
import Modal from './Modal';
import { StyledInput, StyledHeadline } from './FormStyledComponents';

export default function FormForConditions() {
  const hydrated = useHydration();
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const timer = useRef();
  const seller = useStore(state => state.seller);
  const setSellerData = useStore(state => state.setSellerData);
  const schema = SchemaConditions;
  const {
    productsPerParcel,
    domesticShipping,
    internationalShipping,
    minItems,
    maxItems,
    VAT,
  } = seller;
  // ------------------------------------------------------- modal logic //
  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  function handleButtonClick() {
    if (!loading) {
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setShowModal(true);
        setLoading(false);
      }, 1000);
    }
  }

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // ------------------------------------------------------- form logic //
  const onSubmit = data => {
    const domesticShipping = getValues('domesticShipping');
    const cleanDomShipping = GetCleanNumber(domesticShipping);
    const intShipping = getValues('internationalShipping');
    const cleanIntShipping = GetCleanNumber(intShipping);
    const newData = {
      ...data,
      domesticShipping: cleanDomShipping,
      internationalShipping: cleanIntShipping,
    };
    setSellerData(newData);
    handleButtonClick();
  };

  function checkErrors() {
    if (errors) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2500);
    }
  }

  return (
    <>
      {hydrated && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormWrapper>
            <StyledContainer>
              <StyledHeadline>Shipping conditions</StyledHeadline>
              <label // --------------------------------------------------------------------- new label
                htmlFor="domesticShipping"
                className="back-office"
              >
                <strong>Domestic shipping:</strong> price per parcel
              </label>
              <StyledInput
                className="back-office"
                placeholder="€*"
                defaultValue={domesticShipping.toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                })}
                {...register('domesticShipping')}
              />
              <WarningWrapper>
                {errors.domesticShipping && open && (
                  <Toast message={errors?.domesticShipping?.message} />
                )}
              </WarningWrapper>
              <label // --------------------------------------------------------------------- new label
                htmlFor="internationalShipping"
                className="back-office"
              >
                <strong>International shipping:</strong> price per parcel
              </label>
              <StyledInput
                className="back-office"
                placeholder="€"
                defaultValue={internationalShipping.toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                })}
                {...register('internationalShipping')}
              />
              <WarningWrapper>
                {errors.internationalShipping && open && (
                  <Toast message={errors?.internationalShipping?.message} />
                )}
              </WarningWrapper>
              <label // --------------------------------------------------------------------- new label
                htmlFor="productsPerParcel"
                className="back-office"
              >
                Maximum products per parcel
              </label>
              <StyledInput
                className="back-office"
                placeholder="amount"
                defaultValue={productsPerParcel}
                {...register('productsPerParcel')}
              />
              <WarningWrapper>
                {errors.productsPerParcel && open && (
                  <Toast message={errors?.productsPerParcel?.message} />
                )}
              </WarningWrapper>
            </StyledContainer>
            <hr />
            <StyledContainer>
              <StyledHeadline>Order conditions</StyledHeadline>
              <label // --------------------------------------------------------------------- new label
                htmlFor="VAT"
                className="back-office"
              >
                VAT %
              </label>
              <StyledInput
                className="back-office"
                placeholder="amount"
                defaultValue={VAT}
                {...register('VAT')}
              />
              <WarningWrapper>
                {errors.VAT && open && <Toast message={errors?.VAT?.message} />}
              </WarningWrapper>
              <label // --------------------------------------------------------------------- new label
                htmlFor="minItems"
                className="back-office"
              >
                Minimum items per type
              </label>
              <StyledInput
                className="back-office"
                placeholder="amount"
                defaultValue={minItems}
                {...register('minItems')}
              />
              <WarningWrapper>
                {errors.minItems && open && (
                  <Toast message={errors?.minItems?.message} />
                )}
              </WarningWrapper>
              <label // --------------------------------------------------------------------- new label
                htmlFor="minItems"
                className="back-office"
              >
                Maximum items per type
              </label>
              <StyledInput
                className="back-office"
                placeholder="amount"
                defaultValue={maxItems}
                {...register('maxItems')}
              />
              <WarningWrapper>
                {errors.maxItems && open && (
                  <Toast message={errors?.maxItems?.message} />
                )}
              </WarningWrapper>
            </StyledContainer>
          </FormWrapper>
          <NavWrapper // --------------------------------------------------------------------- new label
          >
            {loading && (
              <Box
                sx={{
                  width: '100%',
                  position: 'fixed',
                  bottom: 'var(--nav-height-mobile)',
                  zIndex: '200',
                }}
              >
                <LinearProgress />
              </Box>
            )}
            <Link passHref href="/backoffice/prices">
              <SmallButton className="back-office">
                <BackIcon fill="var(--background-color)" />
              </SmallButton>
            </Link>
            <BigButton
              type="submit"
              disabled={loading}
              onClick={() => checkErrors()}
            >
              <ContentWrapper>
                Save settings
                <h5 className="h5--light">log out</h5>
              </ContentWrapper>
            </BigButton>
            <Modal onClose={() => setShowModal(false)} show={showModal}>
              <h2>Thank you!</h2>
              <Message>Your settings were saved.</Message>
              <Link href="/">Log out</Link>
            </Modal>
          </NavWrapper>
        </form>
      )}
    </>
  );
}

const FormWrapper = styled.div`
  background-color: var(--background-darkcolor);
  position: relative;
  padding: 0 1rem;

  hr {
    border-width: 0;
    border-style: none;
    outline: 0.5px solid var(--gray-translucent);
  }
`;

const StyledContainer = styled.div`
  padding: 1rem 0 3rem;
`;

const WarningWrapper = styled.div`
  position: absolute;
  margin-top: -60px;
  right: 10%;
`;

const Message = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding: 1rem 1rem;
  text-align: center;
`;
