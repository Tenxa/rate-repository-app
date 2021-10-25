export const sortParameters = (selectedSort, debouncedSearch) => {
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