import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './repoItem/RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useHistory } from 'react-router';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

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

export const RepositoryListContainer = ({ repositories }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RenderItem item={item}/>}
      keyExtractor={item => item.id}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return (
    <RepositoryListContainer repositories={repositories} />
  );
};

export default RepositoryList;