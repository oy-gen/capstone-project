import * as yup from 'yup';

const schema = yup
  .object({
    DifferentShipping: yup.boolean(),
    BillingFirstName: yup
      .string()
      .trim()
      .required('required')
      .max(20, '${max} characters max'),
    BillingLastName: yup
      .string()
      .trim()
      .required('required')
      .max(30, '${max} characters max'),
    BuyerEmail: yup
      .string()
      .trim()
      .required('required')
      .email('email incorrect')
      .max(40, '${max} characters max'),
    BillingCompany: yup.string().trim().max(30, '${max} characters max'),
    BillingOptionalLine: yup.string().trim().max(30, '${max} characters max'),
    BillingStreetAndNumber: yup
      .string()
      .trim()
      .required('required')
      .max(40, '${max} characters max'),
    BillingZip: yup
      .string()
      .trim()
      .required('required')
      .max(12, '${max} characters max'),
    BillingCity: yup
      .string()
      .trim()
      .required('required')
      .max(20, '${max} characters max'),
    BillingCountry: yup
      .string()
      .trim()
      .required('required')
      .max(20, '${max} characters max'),

    ShippingFirstName: yup
      .string()
      .trim()
      .max(20, '${max} characters max')
      .when('DifferentShipping', {
        is: true,
        then: yup
          .string()
          .required('required')
          .trim()
          .max(20, '${max} characters max'),
      }),

    ShippingLastName: yup.string().when('DifferentShipping', {
      is: true,
      then: yup
        .string()
        .required('required')
        .trim()
        .max(20, '${max} characters max'),
    }),

    ShippingCompany: yup.string().trim().max(30, '${max} characters max'),
    ShippingOptionalLine: yup.string().max(30, '${max} characters max'),
    ShippingStreetAndNumber: yup.string().when('DifferentShipping', {
      is: true,
      then: yup
        .string()
        .required('required')
        .trim()
        .max(40, '${max} characters max'),
    }),
    ShippingZip: yup.string().when('DifferentShipping', {
      is: true,
      then: yup
        .string()
        .required('required')
        .trim()
        .max(12, '${max} characters max'),
    }),

    ShippingCity: yup.string().when('DifferentShipping', {
      is: true,
      then: yup
        .string()
        .required('required')
        .trim()
        .max(30, '${max} characters max'),
    }),

    ShippingCountry: yup.string().when('DifferentShipping', {
      is: true,
      then: yup
        .string()
        .required('required')
        .trim()
        .max(30, '${max} characters max'),
    }),
  })
  .required();

export default schema;
