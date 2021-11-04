import React from 'react';
import SignInForm from './SignInForm';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, 'username length must be greater or equal to 3')
      .required('username is required'),
    password: yup
      .string()
      .min(3, 'password length must be greater or equal to 3')
      .required('password is required'),
  });

const initialValues = {
    username: "",
    password: ""
};

const onSubmit = ( values ) => {
  console.log(values);
    return(
        null
    );
};

const SignIn = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
      );
};

export default SignIn;