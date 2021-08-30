import React from 'react';
//import Constants from 'expo-constants';
import theme from '../theme';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
//import Subheading from './Subheading';
import AppBar from './AppBar';

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
      <AppBar header='Repositories'/>

      <View>
        <RepositoryList />
      </View>
    </View>
  );
};

export default Main; 