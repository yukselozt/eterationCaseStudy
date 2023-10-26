const INITIAL_STATE = {
  name: "Yüksel",
  age: 26,
  basketItems: [],
  totalPrice: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "INCREMENT_AGE":
      return { ...state, age: state.age + action.payload };
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
      return {
        ...state,
        totalPrice: state.totalPrice + parseInt(product.price),
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
      return {
        ...state,
        totalPrice: state.totalPrice - parseInt(productSub.price),
      };
    // case "CALCULATE_TOTAL_BASKET":
    //   return { ...state, totalPrice: calculateTotalBasket(state.basketItems) };
    default:
      return state;
  }
};
