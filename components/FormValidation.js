import * as yup from 'yup';

export const SchemaAddress = yup
  .object({
    differentShipping: yup.boolean(),
    billingFirstName: yup
      .string()
      .trim()
      .required('required')
      .max(20, '${max} characters max'),
    billingLastName: yup
      .string()
      .trim()
      .required('required')
      .max(30, '${max} characters max'),
    billingCompany: yup.string().trim().max(30, '${max} characters max'),
    billingOptionalLine: yup.string().trim().max(30, '${max} characters max'),
    billingStreetAndNumber: yup
      .string()
      .trim()
      .required('required')
      .max(40, '${max} characters max'),
    billingZip: yup
      .string()
      .trim()
      .required('required')
      .max(12, '${max} characters max'),
    billingCity: yup
      .string()
      .trim()
      .required('required')
      .max(20, '${max} characters max'),
    billingCountry: yup
      .string()
      .trim()
      .required('required')
      .max(20, '${max} characters max'),

    shippingFirstName: yup
      .string()
      .trim()
      .max(20, '${max} characters max')
      .when('differentShipping', {
        is: true,
        then: yup
          .string()
          .required('required')
          .trim()
          .max(20, '${max} characters max'),
      }),

    shippingLastName: yup.string().when('differentShipping', {
      is: true,
      then: yup
        .string()
        .required('required')
        .trim()
        .max(20, '${max} characters max'),
    }),

    shippingCompany: yup.string().trim().max(30, '${max} characters max'),
    shippingOptionalLine: yup.string().max(30, '${max} characters max'),
    shippingStreetAndNumber: yup.string().when('differentShipping', {
      is: true,
      then: yup
        .string()
        .required('required')
        .trim()
        .max(40, '${max} characters max'),
    }),
    shippingZip: yup.string().when('differentShipping', {
      is: true,
      then: yup
        .string()
        .required('required')
        .trim()
        .max(12, '${max} characters max'),
    }),

    shippingCity: yup.string().when('differentShipping', {
      is: true,
      then: yup
        .string()
        .required('required')
        .trim()
        .max(30, '${max} characters max'),
    }),

    shippingCountry: yup.string().when('differentShipping', {
      is: true,
      then: yup
        .string()
        .required('required')
        .trim()
        .max(30, '${max} characters max'),
    }),
  })
  .required();

export const SchemaConditions = yup
  .object({
    domesticShipping: yup
      .string()
      .required('required')
      .max(20, '${max} characters max'),
    internationalShipping: yup.string().max(30, '${max} characters max'),
    productsPerParcel: yup
      .number()
      .typeError('numbers only')
      .positive()
      .required('required'),
    minItems: yup
      .number()
      .positive()
      .typeError('numbers only')
      .max(100, 'this number seems too big'),
    maxItems: yup
      .number()
      .positive()
      .typeError('numbers only')
      .max(100, 'this number seems too big'),
    VAT: yup.number().typeError('numbers only').max(30, 'too long to be true'),
    logoImage: yup.string(),
    backgroundImage: yup.string(),
  })
  .required();
