import { useApolloClient, useMutation } from "@apollo/client";
import { CREATE_USER } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignUp = () => {
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(CREATE_USER, {
       
    });
    const apolloClient = useApolloClient();
  
    const signUp = async ({ username, password }) => {
        const { data } = await mutate({variables: {username, password}});
        if(data && data.authorize) {
          await authStorage.setAccessToken(data.authorize.accessToken);
          apolloClient.resetStore();
        }
        return data;
    };
  
    return [signUp, result];
  };

  export default useSignUp;