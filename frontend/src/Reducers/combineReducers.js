import { combineReducers } from "redux";
import cartReducers from "./cartReducers";
import accountReducer from "./accountReducer";

export default combineReducers({
  cartReducers,
  accountReducer,
});
