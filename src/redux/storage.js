import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadCardItems = async () => {
  try {
    const cardItems = await AsyncStorage.getItem("basketItems");
    if (cardItems) {
      // AsyncStorage'den alınan veriyi ayrıştırın ve sepete yükleyin
      const parsedCardItems = JSON.parse(cardItems);
      console.log(parsedCardItems);
      return parsedCardItems;
    }
  } catch (error) {
    console.error("AsyncStorage veri yüklerken hata oluştu:", error);
  }
};
