const initialState = {
  loggedIn: false,
  accountInfo: null,
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "LOG_INTO_ACCOUNT": {
      return {
        ...state,
        loggedIn: true,
        accountInfo: action.item,
      };
    }
    default:
      return state;
  }
}
