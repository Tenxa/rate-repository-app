import React from "react";
import { View, StyleSheet } from "react-native";
import { useHistory } from "react-router";
import useCreateReview from "../../hooks/useCreateReview";
import ReviewForm from "./ReviewForm";

const styles = StyleSheet.create({
  reviewView: {
    display: 'flex',
    flexDirection: 'row',
  }
});

const ReviewView = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;

    try {
      await createReview({ repositoryName, ownerName, rating, text });
      history.push('/');
    }
    catch (e) {
      console.log(`Error in ReviewView.jsx: \n ${e}`);
    }
  };

  return (
    <View style={styles.reviewView}>
      <ReviewForm onSubmit={onSubmit} />
    </View>
  );
};

export default ReviewView;