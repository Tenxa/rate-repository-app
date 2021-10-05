import React from "react";
import { View } from "react-native";
import Text from "../Text";

export const handleNumber = (num) => {
    if (num/1000 >= 1) {
      return `${(num/1000).toFixed(1)}k`;
    }
    return num;
  };

const RepositoryNumber = ({ number, text, testID }) => {

  return (
    <View style={{display: 'flex', alignItems: 'center', flexGrow: 1}}>
      <Text testID={testID} fontSize='subheading' fontWeight='bold'>{handleNumber(number)}</Text>
      <Text color='textSecondary'>{text}</Text>
    </View>
  );
};

export default RepositoryNumber;