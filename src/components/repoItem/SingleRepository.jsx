import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Text from '../Text';
import { useParams } from 'react-router';
import useRepository from '../../hooks/useRepository';
import theme from '../../theme';
import { ItemSeparator } from '../RepositoryList';
import RepositoryItem from './RepositoryItem';
import { format } from 'date-fns';

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
    borderRadius: 50/2,
    borderWidth: 2.5,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
});


const RepositoryInfo = ({ repository }) => {
  return (
    <View>
      <RepositoryItem {...repository} clicked={true} />
      <ItemSeparator />
    </View>
  );
};

const ReviewItem = ({ review }) => {
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
          <Text style={styles.topRightItems} fontSize='subheading' fontWeight='bold'>{review.user.username}</Text>
          <Text style={styles.topRightItems} color='textSecondary'>{formattedDate}</Text>
          <Text style={styles.topRightItems} fontSize='subheading'>{review.text}</Text>
        </View>

      </View>

    </View>
  );
};


const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
        ItemSeparatorComponent={ItemSeparator}
      />
  );
};

export default SingleRepository;