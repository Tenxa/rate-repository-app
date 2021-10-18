import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router';
import useSignIn from '../../hooks/useSignin';
import theme from '../../theme';
import SignInForm from './SignInForm';

const styles = StyleSheet.create({
  signView: theme.flexRow
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      history.push('/');
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