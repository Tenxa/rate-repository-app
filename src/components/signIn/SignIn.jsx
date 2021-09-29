import React from 'react';
import { View, StyleSheet } from 'react-native';
import useSignIn from '../../hooks/useSignin';
import SignInForm from './SignInForm';

const styles = StyleSheet.create({
  signView: {
    display: 'flex',
    flexDirection: 'row',
  }
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(username, password);

    try {
      const data = await signIn({ username, password });
      console.log(`form data: ${data.authorize.accessToken}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.signView}>
      <SignInForm onSubmit={onSubmit} />
    </View>
  );
};

export default SignIn;