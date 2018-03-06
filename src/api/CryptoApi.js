import axios from "axios";

const ENDPOINT = "https://api.coinmarketcap.com/v1/ticker/";

export default class CryptoApi {
  static getCryptoCurrencies(limit = 25, start = null) {
    let endpoint = ENDPOINT + `?limit=${limit}`;

    if (start != null)
      endpoint += `&start=${start}`;

    return axios.get(endpoint, {});
  }
}
