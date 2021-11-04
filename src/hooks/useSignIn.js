import { useApolloClient, useMutation } from "@apollo/client";
import { AUTHORIZE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(AUTHORIZE, {
       
    });
    const apolloClient = useApolloClient();
  
    const signIn = async ({ username, password }) => {
        const { data } = await mutate({variables: {username, password}});
        if(data && data.authorize) {
          await authStorage.setAccessToken(data.authorize.accessToken);
          apolloClient.resetStore();
        }
        return data;
    };
  
    return [signIn, result];
  };

  export default useSignIn;