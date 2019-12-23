/*
 * VALIDATIONS
 * Object schema validation
 * @see https://github.com/jquense/yup
 */

import * as yup from 'yup';
import { fieldNames } from './enumerations';

export const validationSchema = yup.object().shape({
  [fieldNames.userName]: yup
    .string()
    .min(4)
    .max(30)
    .required(),
  [fieldNames.email]: yup
    .string()
    .email()
    .required(),
  [fieldNames.password]: yup
    .string()
    .min(4)
    .max(30)
    .required(),
  [fieldNames.confirmPassword]: yup
    .string()
    .min(4)
    .max(30)
    .required(),
});
