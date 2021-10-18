import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { ScrollView } from 'react-native';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import useCurrentUser from '../hooks/useCurrentUser';
import { useHistory } from 'react-router';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backGroundColors.appBar,
  },
});



const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const currentUser = useCurrentUser();
  const history = useHistory();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    await history.push('/signIn');
  };


  return currentUser !== null || undefined ?
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/review">Create a review</AppBarTab>
        <AppBarTab onPress={signOut} to="/signOut">Sign Out</AppBarTab>
      </ScrollView>
    </View>
    :
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signIn">Sign in</AppBarTab>
        <AppBarTab to="/signUp">Sign up</AppBarTab>
      </ScrollView>
    </View>;


};

export default AppBar;