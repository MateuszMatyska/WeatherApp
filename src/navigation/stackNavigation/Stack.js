import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from 'src/screens/login/Login';
import Drawer from "src/navigation/drawerNavigation/Drawer";

const MainStack = () => {
    const Stack = createStackNavigator();

    return <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Drawer} />
    </Stack.Navigator>
}

export default MainStack;