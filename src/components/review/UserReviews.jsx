import React from "react";
//import { FlatList } from "react-native";
import useReviews from "../../hooks/useReviews";
//import { ItemSeparator } from "../repositoryList/RepositoryListContainer";
//import ReviewItem from "./ReviewItem";
import ReviewList from "./ReviewList";

const UserReviews = () => {
  const { reviews } = useReviews();

  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <ReviewList
      reviews={reviewNodes}
      user={true}
    />
  );
};

export default UserReviews;