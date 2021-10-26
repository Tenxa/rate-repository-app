import React from 'react';
import { View } from 'react-native';
import { useParams } from 'react-router';
import useRepository from '../../hooks/useRepository';
import { ItemSeparator } from '../repositoryList/RepositoryListContainer';
import RepositoryItem from './RepositoryItem';
//import ReviewItem from '../review/ReviewItem';
import ReviewList from '../review/ReviewList';


const RepositoryInfo = ({ repository }) => {
  return (
    <View>
      <RepositoryItem {...repository} clicked={true} />
      <ItemSeparator />
    </View>
  );
};


const SingleRepository = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository({
    id,
    first: 5
  });

  const onEndReach = () => {
    fetchMore();
  };

  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  /* <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    /> */

  return (
    <ReviewList
      reviews={reviewNodes}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReach={onEndReach}
      onEndReachedThreshold={0.5}
    />

  );
};

export default SingleRepository;