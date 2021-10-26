import React from "react";
import { View, StyleSheet } from 'react-native';
import Text from "../Text";
import { format } from 'date-fns';
import theme from '../../theme';

const styles = StyleSheet.create({
  itemContainer: theme.itemContainer,
  flexTop: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    flexGrow: 1,
    paddingRight: 10,
  },
  flexTopLeft: {
    display: 'flex',
    paddingBottom: 25
  },
  flexTopRight: {
    paddingLeft: 10,
    display: 'flex',
    alignItems: 'flex-start',
  },
  topRightItems: {
    padding: 2.5,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 2.5,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const ReviewItem = ({ review, user }) => {
  // Single review item
  const formattedDate = format(new Date(review.createdAt), "dd.MM.yyyy");

  return (
    <View style={styles.itemContainer}>
      <View style={styles.flexTop}>
        <View style={styles.flexTopLeft}>
          <View style={styles.tinyLogo}>
            <Text color={'primary'} fontSize='subheading' fontWeight='bold'>{review.rating}</Text>
          </View>

        </View>
        <View style={styles.flexTopRight}>
          <Text style={styles.topRightItems} fontSize='subheading' fontWeight='bold'>{user ? review.repository.fullName : review.user.username}</Text>
          <Text style={styles.topRightItems} color='textSecondary'>{formattedDate}</Text>
          <Text style={styles.topRightItems} fontSize='subheading'>{review.text}</Text>
        </View>

      </View>

    </View>
  );
};

export default ReviewItem;