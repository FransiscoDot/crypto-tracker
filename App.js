import React from 'react';
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';

import Watchlist from "./src/screens/watchlist/Watchlist";
import configureStore from "./src/store/configureStore";
import * as cryptoAction from "./src/actions/cryptoAction";

const store = configureStore();

store.dispatch(cryptoAction.getCryptoCurrencies());

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Watchlist />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
