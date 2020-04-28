import "react-native-gesture-handler";
import React from "react";
import MainStack from "src/navigation/stackNavigation/Stack";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "src/navigation/NavigationRef";
import { Provider } from "react-redux";
import { createAppStore } from "src/redux/Store";

const App = () => {
  return (
    <Provider store={createAppStore}>
      <NavigationContainer ref={navigationRef}>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
