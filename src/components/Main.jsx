import React from 'react';
import { Route, Switch } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './signIn/SignIn';
import SingleRepository from './repoItem/SingleRepository';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backGroundColors.main,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {

  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/SignIn" exact>
          <SignIn />
        </Route>
        <Route path="/repositories/:id">
          <SingleRepository/>
        </Route>
      </Switch>
    </View>
  );
};

export default Main; 