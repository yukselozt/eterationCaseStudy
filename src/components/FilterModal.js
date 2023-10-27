import React from "react";
import { View, Text, Modal, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { SetFilter } from "../redux/action";
import { useTranslation } from "react-i18next";

export const FilterModal = ({ visible, onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const filters = [
    { id: 1, name: t("cheapToExpensive") },
    { id: 2, name: t("expensiveToCheap") },
    { id: 3, name: t("lambo") },
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
                fontSize: 25,
              }}
            >
              {filter.name}
            </Text>
          </TouchableOpacity>
        ))}
        <Button
          title={t("resetFilter")}
          onPress={() => dispatch(SetFilter(""))}
        />
        <Button title={t("close")} onPress={onClose} />
      </View>
    </Modal>
  );
};
