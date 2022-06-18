import React from 'react';
import useHydration from '../../hooks/useHydration';
import SettingsIcon from '../../public/settings2-icon.svg';
import { StyledHeader } from '../../components/Header';
import FormForConditions from '../../components/FormForConditions';
import { ContentWrapper } from '../../components/Buttons';

export default function Home() {
  const hydrated = useHydration();

  return (
    <>
      {hydrated && (
        <>
          <StyledHeader className="back-office">
            <SettingsIcon />
            <ContentWrapper>
              <h2 className="back-office">B2B BACK-OFFICE</h2>
              <h5>Order Conditions</h5>
            </ContentWrapper>
          </StyledHeader>
          <FormForConditions />
        </>
      )}
    </>
  );
}
