import React from "react";
import { View, Text, Modal, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { SetFilter } from "../redux/action";

export const FilterModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();

  const filters = [
    { id: 1, name: "Ucuzdan Pahalıya" },
    { id: 2, name: "Pahalıdan Ucuza" },
    { id: 3, name: "Lamborgini" },
  ];
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          gap: 20,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filters.map((filter) => (
          <TouchableOpacity
            onPress={() => dispatch(SetFilter(filter.name))}
            key={filter.id}
          >
            <Text
              style={{
                color: "white",
                fontSize: "25",
              }}
            >
              {filter.name}
            </Text>
          </TouchableOpacity>
        ))}
        <Button title="Reset Filter" onPress={() => dispatch(SetFilter(""))} />
        <Button title="Kapat" onPress={onClose} />
      </View>
    </Modal>
  );
};
