import React from 'react';
import Text from './Text';

const Subheading = ({ children }) => {
  return (
    <Text style={{ paddingBottom: 10 }}
      fontSize='subheading'
      color='textSecondary'
      fontWeight='bold'>
      {children}
    </Text>
  );
};

export default Subheading;