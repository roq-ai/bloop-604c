import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  status: yup.string().required(),
  item_id: yup.string().nullable().required(),
});
