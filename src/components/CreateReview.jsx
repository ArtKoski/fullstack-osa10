import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import useCreateReview from '../hooks/useCreateReview';
import { useHistory } from "react-router";
import ReviewForm from './ReviewForm';


const validationSchema = yup.object().shape({
    owner: yup
      .string()
      .required('owner is required'),
    repositoryName: yup
      .string()
      .required('repository name is required'),
    rating: yup
      .number()
      .required('(Numeric) Rating is required')
      .min(0)
      .max(100),
    review: yup
      .string()
  });

const initialValues = {
    owner: "",
    repositoryName: "",
    rating: "",
    review: ""
};

const CreateReview = () => {
  
  const [createReview] = useCreateReview();
  let history = useHistory();

  const onSubmit = async (values) => {
    
    const { owner, repositoryName, rating, review } = values;
    const ratingAsNumber = Number(rating)
    try {
      const data = await createReview({ name: repositoryName, owner: owner, rating: ratingAsNumber, review: review });
      console.log(data);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
      );
};

export default CreateReview;