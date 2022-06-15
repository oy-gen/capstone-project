import styled from 'styled-components';
import useStore from '../hooks/useStore';

export default function CheckoutAddressSection() {
  const buyer = useStore(state => state.buyer);
  const {
    BuyerEmail,
    DifferentShipping,
    BillingFirstName,
    BillingLastName,
    BillingCompany,
    BillingStreetAndNumber,
    BillingOptionalLine,
    BillingZip,
    BillingCity,
    BillingCountry,
    ShippingFirstName,
    ShippingLastName,
    ShippingCompany,
    ShippingOptionalLine,
    ShippingStreetAndNumber,
    ShippingZip,
    ShippingCity,
    ShippingCountry,
  } = buyer;

  return (
    <AddressSection>
      <div>
        <StyledHeadline align="left">
          {DifferentShipping ? 'Billing Address' : 'Billing / Shipping Address'}
        </StyledHeadline>
        {BillingCompany.length > 0 && <StyledLine>{BillingCompany}</StyledLine>}
        <StyledLine>
          {BillingFirstName} {BillingLastName}
        </StyledLine>
        <StyledLine>{BillingStreetAndNumber}</StyledLine>
        {BillingOptionalLine.length > 0 && (
          <StyledLine>{BillingOptionalLine}</StyledLine>
        )}
        <StyledLine>
          {BillingZip} {BillingCity}
        </StyledLine>
        <StyledLine>{BillingCountry}</StyledLine>
        <StyledLine>{BuyerEmail}</StyledLine>
      </div>
      {DifferentShipping && (
        <div>
          <StyledHeadline>shipping address</StyledHeadline>
          {ShippingCompany.length > 0 && (
            <StyledLine>{ShippingCompany}</StyledLine>
          )}
          <StyledLine>
            {ShippingFirstName} {ShippingLastName}
          </StyledLine>
          <StyledLine>{ShippingStreetAndNumber}</StyledLine>
          {ShippingOptionalLine.length > 0 && (
            <StyledLine>{ShippingOptionalLine}</StyledLine>
          )}
          <StyledLine>
            {ShippingZip} {ShippingCity}
          </StyledLine>
          <StyledLine>{ShippingCountry}</StyledLine>
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
