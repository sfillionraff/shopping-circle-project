const initialState = {
  loggedIn: false,
  accountInfo: null,
  error: null,
  new: null,
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "LOG_INTO_ACCOUNT": {
      return {
        ...state,
        loggedIn: true,
        accountInfo: action.item,
        error: null,
        new: action.new,
      };
    }
    case "LOG_OUT_ACCOUNT": {
      return {
        ...state,
        loggedIn: false,
        accountInfo: null,
        error: null,
      };
    }
    case "LOG_IN_ERROR": {
      return {
        ...state,
        loggedIn: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
