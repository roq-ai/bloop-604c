import * as yup from 'yup';

export const videoValidationSchema = yup.object().shape({
  duration: yup.number().integer().required(),
  item_id: yup.string().nullable().required(),
});
