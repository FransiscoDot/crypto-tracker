import { combineReducers } from "redux";
import crypto from "./cryptoReducer";

export const cryptoReducer = combineReducers({
  crypto
});

export default cryptoReducer;
