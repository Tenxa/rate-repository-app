import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

const useReviews = () => {

  const { data, loading, fetchMore, ...result } = useQuery(GET_USER, {
    variables: {
      includeReviews: true
    },
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.reviews.pageInfo.endCursor,
        includeReviews: true
      }
    });
  };

  return {
    reviews: data?.authorizedUser.reviews,
    loading,
    fetchMore: handleFetchMore,
    ...result
  };

};

export default useReviews;