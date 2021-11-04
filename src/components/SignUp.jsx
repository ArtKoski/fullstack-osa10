import React from 'react';
import SignUpForm from './SignUpForm';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignUp from '../hooks/useSignUp';
import { useHistory } from "react-router";


const validationSchema = yup.object({
    username: yup
      .string()
      .min(1, 'username length must be between 1-30 characters')
      .max(30, 'username length must be between 1-30 characters')
      .required('username is required'),
    password: yup
      .string()
      .min(3, 'password length must be between 3-50 characters')
      .max(50, 'password length must be between 3-50 characters')
      .required('password is required'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Password confirm is required')
  });

const initialValues = {
    username: "",
    password: "",
    passwordConfirm: ""
};

const SignUp = () => {
  
  const [signUp] = useSignUp();
  let history = useHistory();

  const onSubmit = async (values) => {
    
    const { username, password } = values;

    try {
      const data = await signUp({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
      );
};

export default SignUp;