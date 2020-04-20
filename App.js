import "react-native-gesture-handler";
import React from "react";
import Drawer from "src/navigation/drawerNavigation/Drawer";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "src/navigation/NavigationRef";
import { Provider } from "react-redux";
import { createAppStore } from "src/redux/Store";

const App = () => {
  return (
    <Provider store={createAppStore}>
      <NavigationContainer ref={navigationRef}>
        <Drawer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
