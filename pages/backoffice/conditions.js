import React from 'react';
import useHydration from '../../hooks/useHydration';
import SettingsIcon from '../../public/settings2-icon.svg';
import { StyledHeader } from '../../components/Header';
import FormForConditions from '../../components/FormForConditions';
import { ContentWrapper } from '../../components/Buttons';
import HeaderBackOffice from '../../components/HeaderBackOffice';

export default function Home() {
  const hydrated = useHydration();

  return (
    <>
      {hydrated && (
        <section>
          <HeaderBackOffice>
            <h5 className="h5--light">Order Conditions</h5>
          </HeaderBackOffice>
          <FormForConditions />
        </section>
      )}
    </>
  );
}
