import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { useHistory } from "react-router";
import useSignIn from "../../hooks/useSignin";
import useSignUp from "../../hooks/useSignUp";
import theme from "../../theme";
import SignUpForm from "./SignUpForm";

const styles = StyleSheet.create({
  signUpView: theme.flexRow
});

const SignUpView = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;
    //console.log(`username: ${username}\npassword: ${password}\nconfirmation: ${passwordConfirmation}`);

    try {
      await signUp({ username, password });
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(`in SignUpView.jsx: ${e}`);
    }
  };

  return (
    <View style={styles.signUpView}>
      <SignUpForm onSubmit={onSubmit} />
    </View>
  );
};

export default SignUpView;