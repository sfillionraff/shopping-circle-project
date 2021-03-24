const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item.name]: {
          ...action.item,
          quantity: 1,
        },
      };
    }
    case "REMOVE_ITEM": {
      const copyState = { ...state };
      delete copyState[action.item];
      return {
        ...copyState,
      };
    }
    default:
      return state;
  }
}

export const cartItems = (state) => Object.values(state);
