import 'react-native-gesture-handler';
import React from 'react';
import Drawer from 'src/navigation/drawerNavigation/Drawer';
import { NavigationContainer } from '@react-navigation/native';
import {navigationRef} from 'src/navigation/NavigationRef';

const App = () => {
  return (
   <NavigationContainer ref={navigationRef}>
     <Drawer />
   </NavigationContainer>
  );
};

export default App;
