import styled from 'styled-components';
import useHydration from '../hooks/useHydration';
import { useFullInfo } from '../hooks/useCalculation';
import useStore from '../hooks/useStore';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Toast from './Toast';
import { useState } from 'react';
import { StyledInput } from './FormStyledComponents';
import { GetCleanNumber } from '../hooks/useCalculation';
import { useFormContext } from 'react-hook-form';

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);
  const hydrated = useHydration();
  const { id, name, RRPprice, image } = product;
  const fullInfo = useFullInfo(product.id);
  const setWSprice = useStore(state => state.setWSprice);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {hydrated && (
        <>
          <StyledRow>
            <StyledImage src={image} alt={name} />
            <InfoWrapper>
              <h3>{name}</h3>
              <h5 className="back-office">ID: {id}</h5>
            </InfoWrapper>
            <GridColumnWrapper>
              <h4 className="back-office">
                <strong>
                  RRP:{' '}
                  {RRPprice.toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                  })}
                </strong>
              </h4>
              <p className="back-office">WS price:</p>
              <InputWrapper>
                <StyledInput
                  className="back-office--short"
                  key={id}
                  defaultValue={fullInfo.WSprice.toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                  })}
                  placeholder="new price"
                  {...register('WSprice')}
                  {...register(`${id}`)}
                  
                />
                <WarningWrapper>
                  {errors && open && (
                    <Toast message={errors?.WSprice?.message} />
                  )}
                </WarningWrapper>
              </InputWrapper>
            </GridColumnWrapper>
          </StyledRow>
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
const GridColumnWrapper = styled.div`
  grid-column: 3/4;
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
