import styled from 'styled-components';
import useHydration from '../hooks/useHydration';
import useStore from '../hooks/useStore';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledInput } from './FormStyledComponents';
import NavWrapper from './NavWrapper';
import { BigButton, SmallButton } from './Buttons';
import { useEffect } from 'react';

export default function NewPrices() {
  const products = useStore(state => state.products);
  const hydrated = useHydration();
  const {
    register,
    handleSubmit,
    defaultValues,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log('log data', data);
    //const updateId= setValue(...data
    // const input = getValues('WSprice');
    // const cleanNumber = GetCleanNumber(input);
    // setWSprice(id, cleanNumber);
  };

  return (
    <>
      {hydrated && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            {products.map((product, index) => (
              <StyledRow key={product.id}>
                <StyledImage src={product.image} alt={product.name} />
                <InfoWrapper>
                  <h4>{product.name}</h4>
                  <h4>RRP: {product.RRPprice}</h4>
                </InfoWrapper>
                <p className="back-office">WS price:</p>
                <InputWrapper>
                  <StyledInput
                    {...register(`${index}.WSprice`, {
                      required: 'error message',
                    })}
                    className="back-office"
                    key={product.id}
                    placeholder="new price"
                    onChange={() => setValue(`${index}.id`, `${product.id}`)}
                  />
                  <WarningWrapper>
                    <p>{errors?.WSprice?.message}</p>
                  </WarningWrapper>
                </InputWrapper>
              </StyledRow>
            ))}
            <NavWrapper // ---------------------------------------------- NAV
            >
              <SmallButton className="back-office">logout</SmallButton>
              <BigButton type="submit">PROCEED TO</BigButton>
            </NavWrapper>
          </form>
        </>
      )}
    </>
  );
}

const StyledRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1.1fr 1fr;
  background-color: var(--background-darkcolor);
  padding: 0.6rem 0.6rem 0.6rem 0;
  border-top: 1px solid var(--gray-translucent);
  align-items: center;
  gap: 0.6rem;
`;

const WarningWrapper = styled.div`
  position: absolute;
  right: 190px;
`;

const StyledImage = styled.img`
  grid-column: 1 / 2;
  opacity: 0.9;
  width: 100%;
`;

const InfoWrapper = styled.div`
  grid-column: 2/3;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  grid-column: 3/4;
`;

// return (
//   <>
//     {hydrated && (
//       <>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <StyledRow>
//             <StyledImage src={image} alt={name} />
//             <InfoWrapper>
//               <h3>{name}</h3>
//               <h5 className="back-office">ID: {id}</h5>
//             </InfoWrapper>
//             <GridColumnWrapper>
//               <h4 className="back-office">
//                 <strong>
//                   RRP:{' '}
//                   {RRPprice.toLocaleString('de-DE', {
//                     style: 'currency',
//                     currency: 'EUR',
//                   })}
//                 </strong>
//               </h4>
//               <p className="back-office">WS price:</p>
//               <InputWrapper>
//                 <StyledInput
//                   className="back-office--short"
//                   key={id}
//                   defaultValue={fullInfo.WSprice.toLocaleString('de-DE', {
//                     style: 'currency',
//                     currency: 'EUR',
//                   })}
//                   placeholder="new price"
//                   {...register('WSprice')}
//                 />
//                 <WarningWrapper>
//                   {errors.WSprice && open && (
//                     <Toast message={errors?.WSprice?.message} />
//                   )}
//                 </WarningWrapper>
//                 <SmallSquareButton
//                   className="save-button"
//                   onClick={() => {
//                     triggerToast();
//                   }}
//                   type="submit"
//                 >
//                   <Icon />
//                 </SmallSquareButton>
//               </InputWrapper>
//             </GridColumnWrapper>
//           </StyledRow>
//         </form>
//       </>
//     )}
//   </>
// );
// }
