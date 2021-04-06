const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return [...state, action.item];
    }
    case "REMOVE_ITEM": {
      const copyState = [...state];
      const index = state.indexOf(action.item);
      copyState.splice(index, 1);
      return copyState;
    }
    default:
      return state;
  }
}
