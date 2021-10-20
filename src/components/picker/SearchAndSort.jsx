import React from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "./SearchBar";
import SortPressable from "./SortPressable";

const styles = StyleSheet.create({
  searchBar: {
    padding: 15,
  }
});

const SearchAndSort = ({ selectedSort, setSelectedSort, searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.searchBar}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <SortPressable selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
    </View>
  );
};

export default SearchAndSort;