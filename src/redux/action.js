export const SetName = (name) => {
  return {
    type: "SET_NAME",
    payload: name,
  };
};

export const SetAge = (age) => {
  return {
    type: "SET_AGE",
    payload: age,
  };
};

export const IncrementAge = () => {
  return {
    type: "INCREMENT_AGE",
    payload: 1,
  };
};

export const SetBasket = (asyncStorage) => {
  return {
    type: "SET_BASKET",
    payload: asyncStorage,
  };
};
export const AddToBasket = (product) => {
  return {
    type: "ADD_TO_BASKET",
    payload: product,
  };
};

export const SubtractToBasket = (product) => {
  return {
    type: "SUBTRACT_TO_BASKET",
    payload: product,
  };
};

export const SetTotalPrice = (asyncStorage) => {
  return {
    type: "SET_TOTAL_PRICE",
    payload: asyncStorage,
  };
};

export const ToggleFavourites = (product) => {
  return {
    type: "TOGGLE_FAVOURITES",
    payload: product,
  };
};
