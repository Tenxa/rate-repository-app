import React from "react";
import { FlatList } from "react-native";
import { ItemSeparator } from "../repositoryList/RepositoryListContainer";
import ReviewItem from "./ReviewItem";

const ReviewList = ({ reviews, user, onEndReach, ...props}) => {

  /* const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : []; */

  return(
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} user={user}/>}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      {...props}
    />
  );

};

export default ReviewList;