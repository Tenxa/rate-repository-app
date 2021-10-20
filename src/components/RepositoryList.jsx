import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useDebounce } from 'use-debounce';
import RepositoryItem from './repoItem/RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useHistory } from 'react-router';
import SearchAndSort from './picker/SearchAndSort';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


export const ItemSeparator = () => <View style={styles.separator} />;

const RenderItem = ({ item }) => {
  const history = useHistory();

  const onPress = () => {
    history.push(`/repositories/${item.id}`);
  };

  return (
    <Pressable onPress={onPress}>
      <RepositoryItem {...item} clicked={false} />
    </Pressable>
  );
};

export const RepositoryListContainer = ({ repositories, selectedSort, setSelectedSort, searchQuery, setSearchQuery }) => {
  //const props = { repositories, selectedSort, setSelectedSort, searchQuery, setSearchQuery };

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <View>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={<SearchAndSort selectedSort={selectedSort} setSelectedSort={setSelectedSort} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
      />
    </View>
  );
};

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