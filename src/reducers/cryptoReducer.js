import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function crypto(state = initialState.currencies, action) {
  switch (action.type) {
    case types.LOAD_CRYPTO_CURRENCIES:
      return [
        ...state,
        Object.assign({}, action.currencies)
      ];

    default:
      return state;
  }
}
