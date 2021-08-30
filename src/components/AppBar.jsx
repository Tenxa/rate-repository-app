import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backGroundColors.appBar,
  },
  appBarText: {
    paddingBottom: 10,
    paddingLeft: 10,
    color: theme.colors.appBar,
  },
});

const AppBar = ({ header }) => {
  return (
    <View style={styles.container}>
      <AppBarTab>
        {header}
      </AppBarTab>
    </View>
  );
};

export default AppBar;