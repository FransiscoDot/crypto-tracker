import { createStore, applyMiddleware } from "redux";
import { cryptoReducer } from "../reducers/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  return createStore(
    cryptoReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
