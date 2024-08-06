import * as yup from 'yup';

export const authSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Email format is invalid'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password should be atleast 8 characters long'),
});
