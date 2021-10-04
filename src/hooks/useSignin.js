import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHORIZE_USER } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";


const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHORIZE_USER);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } }
    });
    //console.log(`hook data: ${data.authorize.accessToken}`);
    await authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();

    return data;
  };

  return [signIn, result];
};

export default useSignIn;