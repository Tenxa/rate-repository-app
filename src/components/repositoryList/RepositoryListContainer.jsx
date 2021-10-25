import React from "react";
import { FlatList, View, Pressable, StyleSheet } from 'react-native';
import SearchAndSort from "../picker/SearchAndSort";
import RepositoryItem from "../repoItem/RepositoryItem";
import { useHistory } from "react-router";

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

const RepositoryListContainer = ({
  repositories,
  selectedSort,
  setSelectedSort,
  searchQuery,
  setSearchQuery,
  onEndReach
}) => {

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
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <SearchAndSort
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        }
      />
    </View>
  );
};

export default RepositoryListContainer;