import React from 'react';
import { Route, Switch } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './signIn/SignIn';
import SingleRepository from './repoItem/SingleRepository';
import ReviewView from './review/ReviewView';
import SignUpView from './signUp/SignUpView';
//import SortPicker from './picker/SortPicker';

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
        <Route exact path="/" >
          <RepositoryList />
        </Route>
        <Route exact path="/signIn" >
          <SignIn />
        </Route>
        <Route exact path="/signUp">
          <SignUpView />
        </Route>
        <Route path="/repositories/:id">
          <SingleRepository />
        </Route>
        <Route path="/review">
          <ReviewView />
        </Route>
      </Switch>
    </View>
  );
};

export default Main;