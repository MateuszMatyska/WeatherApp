import React from "react";
import { Icon } from "native-base";
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from "src/screens/about/About";
import Tabs from 'src/navigation/tabNavigation/Tabs';
import {colors} from 'src/const/colors'

const Drawer = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Tabs} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
  );
};

export default Drawer;
