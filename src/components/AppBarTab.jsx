import React from "react";
import { StyleSheet } from 'react-native';
import { Pressable,  } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  appBarText: {
    paddingBottom: 10,
    paddingLeft: 10,
    color: theme.colors.appBar,
  },
});

const AppBarTab = ({ children }) => {
  return (
    <Pressable>
      <Text style={styles.appBarText}
        color
        fontSize='subheading'
        fontWeight='bold'
      >
        {children}
      </Text>
    </Pressable>
  );

};

export default AppBarTab;