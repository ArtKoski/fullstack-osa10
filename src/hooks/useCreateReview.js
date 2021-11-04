import { useApolloClient, useMutation } from "@apollo/client";
import { CREATE_REVIEW } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useCreateReview = () => {
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(CREATE_REVIEW, {
    });
    const apolloClient = useApolloClient();
  
    const createReview = async ({ owner, name, rating, review }) => {
        const { data } = await mutate({variables: {owner, name, rating, review}});
        return data;
    };
  
    return [createReview, result];
  };

  export default useCreateReview;