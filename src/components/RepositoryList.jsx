import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './repoItem/RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useHistory } from 'react-router';
import SortPressable from './picker/SortPressable';

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

export const RepositoryListContainer = ({ repositories, selectedSort, setSelectedSort }) => {

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
        ListHeaderComponent={<SortPressable selectedSort={selectedSort} setSelectedSort={setSelectedSort} />}
      />
    </View>
  );
};

const RepositoryList = () => {
  const [selectedSort, setSelectedSort] = useState("Latest repositories");
  
  const sortParameters = (selectedSort) => {
    switch (selectedSort) {
      case 'Latest repositories': {
        return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
      }
      case 'Highest rated repositories': {
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
      }
      case 'Lowest rated repositories': {
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
      }
      default: {
        return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
      }
    }
  };

  const { repositories } = useRepositories(sortParameters(selectedSort));

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedSort={selectedSort}
      setSelectedSort={setSelectedSort}
    />
  );
};

export default RepositoryList;