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
      <Text testID={'fullNameField'} style={styleItem} fontSize='subheading' fontWeight='bold'>{fullName}</Text>
      <Text testID={'descriptionField'} style={styleItem} color='textSecondary'>{description}</Text>
      <View style={styleItem}>
        <Text testID={'languageField'} style={styles.languageText}>{language}</Text>
      </View>
    </View>
  );
};

export default RepoDetails;