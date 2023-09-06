import * as yup from 'yup';

export const itemValidationSchema = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required(),
  price: yup.number().integer().required(),
  status: yup.string().required(),
  marketplace_id: yup.string().nullable().required(),
});
