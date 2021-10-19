import React from "react";
import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 100
    },
    shadowOpacity: 1,
    shadowRadius: 200,
    elevation: 5,
  },
});

const SortPicker = ({ selectedSort, setSelectedSort, setModalVisible }) => {
  return (
    <Picker
      style={styles.modalView}
      selectedValue={selectedSort}
      onValueChange={(itemValue) =>
        {
          setSelectedSort(itemValue);
          setModalVisible(false);
        }
      }>
      <Picker.Item label="Latest repositories" value="Latest repositories" />
      <Picker.Item label="Highest rated repositories" value="Highest rated repositories" />
      <Picker.Item label="Lowest rated repositories" value="Lowest rated repositories" />
    </Picker>
  );
};

export default SortPicker;