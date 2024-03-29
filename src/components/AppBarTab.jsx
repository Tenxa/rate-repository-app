import React from "react";
import { Pressable, StyleSheet } from 'react-native';
import { Link } from "react-router-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  appBarText: {
    padding: 10,
    color: theme.colors.appBar,
    borderRightWidth: 2.5,
    borderColor: theme.backGroundColors.main,
    borderRadius: 10
  },
});

const AppBarTab = ({ children, to, onPress }) => {
  return (
      <Link to={to} component={Pressable} onPress={onPress}>
        <Text style={styles.appBarText}
          color
          fontSize='subheading'
          fontWeight='bold'
        >
          {children}
        </Text>
      </Link>
  );

};

export default AppBarTab;