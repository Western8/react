import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field')
    .matches(/^[A-Z]/, 'The first letter should be capital'),
  age: yup.number().positive().min(1).required('Age is a required field'),
  email: yup.string().email().required('E-mail is a required field'),
  password1: yup
    .string()
    .matches(/[a-z]+/, 'Password must contain one lowercased character')
    .matches(/[A-Z]+/, 'Password must contain one uppercased character')
    .matches(/[@$!%*#?&]+/, 'Password must contain one special character')
    .matches(/\d+/, 'Password must contain one number')
    .required('Password is a required field'),
  password2: yup
    .string()
    .oneOf([yup.ref('password1')], 'Passwords not match')
    .required('Password is a required field'),
  gender: yup.string().required('Gender is a required field'),
  accept: yup.boolean().required('Accept T&C is a required field'),
  img: yup.string().required('Image is necessary to upload'),
  country: yup.string().required('Country is a required field'),
});

export default schema;
