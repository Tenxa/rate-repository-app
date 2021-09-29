import { useMutation } from "@apollo/client";
import { AUTHORIZE_USER } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE_USER);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const { data } = await mutate({
      variables: { credentials: { username, password } }
    });
    console.log(`hook data: ${data.authorize.accessToken}`);

    return data;
  };

  return [signIn, result];
};

export default useSignIn;