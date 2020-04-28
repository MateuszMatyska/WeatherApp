import React from "react";
import { SafeAreaView } from "react-native";
import { View, Text, Button } from "native-base";
import { navigate } from "src/navigation/NavigationRef";

const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Login Screen</Text>
        <Button success rounded large onPress={() => { navigate('Home') }}>
          <Text>Login</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;
