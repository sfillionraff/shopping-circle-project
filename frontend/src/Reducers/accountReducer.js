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
    case "LOG_OUT_ACCOUNT": {
      return {
        ...state,
        loggedIn: false,
        accountInfo: null,
      };
    }
    default:
      return state;
  }
}
