import AsyncStorage from "@react-native-async-storage/async-storage";

const INITIAL_STATE = {
  name: "Yüksel",
  surname: "ÖZTÜRK",
  age: 26,
  basketItems: [],
  totalPrice: 0,
  favourites: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "SET_BASKET":
      return { ...state, basketItems: action.payload };
    case "SET_TOTAL_PRICE":
      return { ...state, totalPrice: action.payload };
    case "ADD_TO_BASKET":
      const product = action.payload;
      const existingProduct = state.basketItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        // Eğer ürün zaten sepete ekliyse, sadece miktarını artır
        existingProduct.quantity += 1;
      } else {
        // Eğer ürün daha önce eklenmemişse, yeni bir öğe olarak sepete ekle
        product.quantity = 1;
        state.basketItems.push(product);
      }
      AsyncStorage.setItem("basketItems", JSON.stringify(state.basketItems));
      AsyncStorage.setItem(
        "totalPrice",
        JSON.stringify(state.totalPrice + parseFloat(product.price))
      );
      return {
        ...state,
        totalPrice: state.totalPrice + parseFloat(product.price),
      };
    case "SUBTRACT_TO_BASKET":
      const productSub = action.payload;
      const indexOfProductSub = state.basketItems.indexOf(productSub);
      if (productSub.quantity > 1) {
        // Eğer ürün miktarı 1'den büyükse miktarı azalt
        productSub.quantity -= 1;
      } else {
        // Eğer sepette üründen sadece 1 tane var ise sepetten sil
        state.basketItems.splice(indexOfProductSub, 1);
      }
      AsyncStorage.setItem("basketItems", JSON.stringify(state.basketItems));
      AsyncStorage.setItem(
        "totalPrice",
        JSON.stringify(state.totalPrice - parseFloat(productSub.price))
      );
      return {
        ...state,
        totalPrice: state.totalPrice - parseInt(productSub.price),
      };
    case "TOGGLE_FAVOURITES":
      const productFavourite = action.payload;
      const indexOfProductFavourite =
        state.favourites.indexOf(productFavourite);
      if (indexOfProductFavourite === -1) {
        // Eğer ürün favorilerde yok ise favorilere ekle
        state.favourites.push(productFavourite);
        productFavourite.isFavourite = true;
      } else {
        // Eğer ürün zaten favorilerde ise favorilerden çıkar
        state.favourites.splice(indexOfProductFavourite, 1);
        productFavourite.isFavourite = false;
      }
      return { ...state };
    default:
      return state;
  }
};
