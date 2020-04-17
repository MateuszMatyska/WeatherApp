import 'react-native-gesture-handler';
import React from 'react';
import Drawer from 'src/navigation/drawerNavigation/Drawer';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
   <NavigationContainer>
     <Drawer />
   </NavigationContainer>
  );
};

export default App;
