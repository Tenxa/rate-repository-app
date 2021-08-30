import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  languageText: {
    backgroundColor: theme.backGroundColors.languageText,
    color: 'white',
    padding: 3.5,
    borderRadius: 3
  },
});


const RepoDetails = ({ styleContainer, styleItem, fullName, description, language }) => {
  return (
    <View style={styleContainer}>
      <Text style={styleItem} fontSize='subheading' fontWeight='bold'>{fullName}</Text>
      <Text style={styleItem} color='textSecondary'>{description}</Text>
      <View style={styleItem}>
        <Text style={styles.languageText}>{language}</Text>
      </View>
    </View>
  );
};

export default RepoDetails;