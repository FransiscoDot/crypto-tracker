import React from "react";
import { TabNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Watchlist from "../screens/watchlist/Watchlist";
import Preferences from "../screens/preferences/Preferences";

export default TabNavigator(
  {
    Watchlist: { screen: Watchlist },
    Preferences: { screen: Preferences }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'Watchlist') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Preferences') {
          iconName = `ios-paper${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ff3287',
      inactiveTintColor: 'white',
      tabBarPosition: "bottom",
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: '#161614'
      },
    }
  }
)
