import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';


const RepositoryList = () => {
  const [selectedSort, setSelectedSort] = useState("Latest repositories");
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch] = useDebounce(searchQuery, 500);

  const sortParameters = (selectedSort) => {
    switch (selectedSort) {
      case 'Latest repositories': {
        return { orderBy: 'CREATED_AT', orderDirection: 'DESC', searchKeyword: debouncedSearch };
      }
      case 'Highest rated repositories': {
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC', searchKeyword: debouncedSearch };
      }
      case 'Lowest rated repositories': {
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC', searchKeyword: debouncedSearch };
      }
      default: {
        return { orderBy: 'CREATED_AT', orderDirection: 'DESC', searchKeyword: debouncedSearch };
      }
    }
  };

  const { repositories } = useRepositories(sortParameters(selectedSort));

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedSort={selectedSort}
      setSelectedSort={setSelectedSort}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default RepositoryList;