// cart actions
export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

// account actions
export const logIntoAccount = (item) => ({
  type: "LOG_INTO_ACCOUNT",
  item,
});

export const logOutAccount = () => ({
  type: "LOG_OUT_ACCOUNT",
});

export const logInError = (item, error) => ({
  type: "LOG_IN_ERROR",
  item,
  error,
});
