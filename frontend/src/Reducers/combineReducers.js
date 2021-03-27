import { combineReducers } from "redux";
import cartReducer from "./cartReducers";
import accountReducer from "./accountReducer";

export default combineReducers({
  cartReducer,
  accountReducer,
});
