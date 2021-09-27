import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignInForm from './SignInForm';

const styles = StyleSheet.create({
  signView: {
    display: 'flex',
    flexDirection: 'row',
  }
});

const SignIn = () => {
  const onSubmit = values => {
    const username = (values.username);
    const password = (values.password);
    console.log(`username: ${username}, password ${password}`);
  };

  return (
    <View style={styles.signView}>
      <SignInForm onSubmit={onSubmit} />
    </View>
  );
};

export default SignIn;