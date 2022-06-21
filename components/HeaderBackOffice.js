import styled from 'styled-components';
import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';
import { ContentWrapper } from './Buttons';
import SettingsIcon from '../public/settings2-icon.svg';
import { StyledHeader } from './Header';

export default function HeaderBackOffice({children}) {
  const hydrated = useHydration();
  const logoImage = useStore(state => state.seller.logoImage);
  return (
    <>
      {hydrated && (
        <StyledHeader className="back-office">
          <SettingsIcon />
          <ContentWrapper>
            <h2 className="back-office">B2B BACK-OFFICE</h2>
            {children}
          </ContentWrapper>
        </StyledHeader>
      )}
    </>
  );
}
