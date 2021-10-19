import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection }) => {
  const [repositories, setRepositories] = useState();

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection },
    fetchPolicy: 'cache-and-network',
  });

  const fetchRepositories = () => {
    if (data) {
      setRepositories(data.repositories);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, [data]);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;