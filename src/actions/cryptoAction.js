import * as types from "./actionTypes";
import CryptoApi from "../api/CryptoApi";

export function loadCryptoCurrencies(currencies) {
  return {
    type: types.LOAD_CRYPTO_CURRENCIES,
    currencies
  };
}

export function getCryptoCurrencies(limit, start) {
  return function(dispatch) {
    return CryptoApi.getCryptoCurrencies(limit, start).then(response => {
      dispatch(loadCryptoCurrencies(response));
    }).catch(error => {
      throw error;
    });
  };
}
