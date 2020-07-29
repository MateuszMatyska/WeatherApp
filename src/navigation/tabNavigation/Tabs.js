import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Weathers from "src/screens/weathers/Weathers";
import Favourites from "src/screens/favourites/Favourites";
import {colors} from 'src/const/colors'

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.gray,
      }}
    >
      <Tab.Screen
        name="Weathers"
        component={Weathers}
        options={{
          tabBarLabel: "Weather",
          tabBarIcon: ({ color }) => (
            <Icon name="sun-o" type="FontAwesome" style={{color: `${color}`}} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: "Favourites",
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} type="FontAwesome" style={{color: `${color}`}}/>
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
