import React, { useState } from "react";
import { View, StyleSheet, Pressable, Modal } from "react-native";
import Text from "../Text";
import SortPicker from "./SortPicker";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20
  },
  triangle: {
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 0,
    borderLeftWidth: 5,
    borderTopColor: "grey",
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    opacity: 0.8,
  },
});


const SortPressable = ({ selectedSort, setSelectedSort }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const SortModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(true);
        }}
      >
        <SortPicker
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          setModalVisible={setModalVisible}
        />

      </Modal>
    );
  };

  const onPress = () => {
    setModalVisible(true);
  };

  return (
    <View>
      <SortModal />
      <Pressable style={styles.container} onPress={onPress}>
        <Text color='textSecondary' fontSize='subheading' >{selectedSort ? selectedSort : 'Select sort'}</Text>
        <View style={styles.triangle}></View>
      </Pressable>
    </View>

  );
};

export default SortPressable;