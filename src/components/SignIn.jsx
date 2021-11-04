import React from 'react';
import SignInForm from './SignInForm';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from "react-router";


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

const SignIn = () => {
  
  const [signIn] = useSignIn();
  let history = useHistory();

  const onSubmit = async (values) => {
    
    const { username, password } = values;

    try {
      const data  = await signIn({ username, password });
      console.log(data);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
      );
};

export default SignIn;