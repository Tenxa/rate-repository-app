import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
import useRepositories from '../../hooks/useRepositories';
import * as UTIL from '../../utils/sortParameters';
import RepositoryListContainer from './RepositoryListContainer';


const RepositoryList = () => {
  const [selectedSort, setSelectedSort] = useState("Latest repositories");
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch] = useDebounce(searchQuery, 500);

  const { orderBy, orderDirection, searchKeyword } = UTIL.sortParameters(selectedSort, debouncedSearch);
  const { repositories, fetchMore } = useRepositories({
    orderBy,
    orderDirection,
    searchKeyword,
    first: 5
  });

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedSort={selectedSort}
      setSelectedSort={setSelectedSort}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;