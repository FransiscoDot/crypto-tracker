import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import { List, Text, ListItem } from "native-base";

class Watchlist extends Component {
  render() {

    return (
      <View style={styles.container}>
        <List dataArray={[]}
          renderRow={(item) =>
            (
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            )
          }>
        </List>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(mapStateToProps)(Watchlist);
