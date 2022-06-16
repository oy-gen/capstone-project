import styled from 'styled-components';
import useStore from '../hooks/useStore';

export default function CheckoutAddressSection() {
  const user = useStore(state => state.user);
  const {
    differentShipping,
    billingFirstName,
    billingLastName,
    billingCompany,
    billingStreetAndNumber,
    billingOptionalLine,
    billingZip,
    billingCity,
    billingCountry,
    shippingFirstName,
    shippingLastName,
    shippingCompany,
    shippingOptionalLine,
    shippingStreetAndNumber,
    shippingZip,
    shippingCity,
    shippingCountry,
  } = user;

  return (
    <AddressSection>
      <div>
        <StyledHeadline align="left">
          {differentShipping ? 'Billing Address' : 'Billing / Shipping Address'}
        </StyledHeadline>
        {billingCompany.length > 0 && <StyledLine>{billingCompany}</StyledLine>}
        <StyledLine>
          {billingFirstName} {billingLastName}
        </StyledLine>
        <StyledLine>{billingStreetAndNumber}</StyledLine>
        {billingOptionalLine.length > 0 && (
          <StyledLine>{billingOptionalLine}</StyledLine>
        )}
        <StyledLine>
          {billingZip} {billingCity}
        </StyledLine>
        <StyledLine>{billingCountry}</StyledLine>
      </div>
      {differentShipping && (
        <div>
          <StyledHeadline>shipping address</StyledHeadline>
          {shippingCompany.length > 0 && (
            <StyledLine>{shippingCompany}</StyledLine>
          )}
          <StyledLine>
            {shippingFirstName} {shippingLastName}
          </StyledLine>
          <StyledLine>{shippingStreetAndNumber}</StyledLine>
          {shippingOptionalLine.length > 0 && (
            <StyledLine>{shippingOptionalLine}</StyledLine>
          )}
          <StyledLine>
            {shippingZip} {shippingCity}
          </StyledLine>
          <StyledLine>{shippingCountry}</StyledLine>
        </div>
      )}
    </AddressSection>
  );
}

const AddressSection = styled.section`
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
`;

const StyledLine = styled.p`
  line-height: 0.6rem;
  color: var(--text-maincolor);
`;

const StyledHeadline = styled.h2`
  font-size: 14px;
  text-align: ${props => props.align};
  margin: 30px auto 10px;
`;
