import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ActivityIndicator,
  FlatList,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import NoElementForFlatList from "../../components/NoElementForFlatList";
import { SetTotalPrice, SetBasket } from "../../redux/action";
import { useNavigation } from "@react-navigation/native";
import ProductCard from "../../components/ProductCard";
import useApiData from "../../hooks/useApiData";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterModal } from "../../components/FilterModal";
import { useTranslation } from "react-i18next";

export const HomeScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const Navigation = useNavigation();
  const { data, loading, error } = useApiData();
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { GeneralResponse } = useSelector((state) => state);
  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredData = data?.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const handleFilter = () => {
    var filterResult = [];
    if (GeneralResponse.filter === t("cheapToExpensive")) {
      filterResult = filteredData
        .slice()
        .sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else if (GeneralResponse.filter === t("expensiveToCheap")) {
      filterResult = filteredData
        .slice()
        .sort((a, b) => parseInt(b.price) - parseInt(a.price));
    } else {
      filterResult = filteredData.filter(
        (product) => product.brand === t("lambo")
      );
    }
    return filterResult;
  };

  useEffect(() => {
    (async () => {
      const basketItems = await AsyncStorage.getItem("basketItems");
      const parsedBasketItems = JSON.parse(basketItems);
      const totalPrice = await AsyncStorage.getItem("totalPrice");
      const parsedTotalPrice = JSON.parse(totalPrice);
      if (parsedBasketItems) {
        dispatch(SetBasket(parsedBasketItems));
      } else {
        console.log("ne basketItems'i ya ?");
      }
      if (parsedTotalPrice) {
        dispatch(SetTotalPrice(parsedTotalPrice));
      } else {
        console.log("ne totalPrice'i ya ?");
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <FilterModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <>
          <TextInput
            style={styles.searchBar}
            placeholder={t("searchSth")}
            // collapsable={true}
            value={searchText}
            onChangeText={handleSearch}
          />
          <View style={styles.filter}>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.filterText}
            >
              {t("filters")}: {GeneralResponse.filter}
            </Text>
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.filterText}>{t("selectFilter")}</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={GeneralResponse.filter === "" ? filteredData : handleFilter()}
            keyExtractor={(item) => item.id}
            horizontal={false}
            numColumns={2}
            // onEndReached={() => sayfaIleriGit()}
            onEndReachedThreshold={0.1}
            ListEmptyComponent={<NoElementForFlatList />}
            contentContainerStyle={{ alignItems: "center" }}
            renderItem={({ item }) => (
              <ProductCard
                product={item}
                onPress={() => Navigation.navigate("Details", { item })}
              />
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    height: 40,
    width: "90%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  filter: {
    height: 40,
    width: "90%",
    paddingHorizontal: 8,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterButton: {
    borderColor: "gray",
    borderRadius: 8,
    borderWidth: 1,
    width: "40%",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },
  filterText: {
    maxWidth: 200,
    fontSize: 16,
    fontWeight: "bold",
  },
});
