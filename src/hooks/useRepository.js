import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_REPOSITORY_BY_ID } from '../graphql/queries';

const useRepository = ( id ) => {
  const [repository, setRepository] = useState();

  const { data, loading } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  const fetchRepository = () => {
    if (data) {
      setRepository(data.repository);
    }
  };

  useEffect(() => {
    fetchRepository();
  }, [data]);

  return { repository, loading, refetch: fetchRepository };
};

export default useRepository;