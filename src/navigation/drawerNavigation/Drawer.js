import React from "react";
import { Icon } from "native-base";
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from "src/screens/about/About";
import Tabs from 'src/navigation/tabNavigation/Tabs';
import {colors} from 'src/const/colors'
import DrawerContent from 'src/navigation/drawerNavigation/drawerContent/DrawerContent';

const Drawer = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen 
          name="Home"
          component={Tabs} 
          options={{
            drawerIcon: ({color}) => (<Icon name="home" color={color} type="FontAwesome" style={{color: `${color}`}}/>)
          }}
        />
        <Drawer.Screen 
          name="About" 
          component={About} 
          options={{
            drawerIcon: ({color}) => (<Icon name="info" color={color} type="FontAwesome" style={{color: `${color}`}}/>)
          }}
        />
      </Drawer.Navigator>
  );
};

export default Drawer;
