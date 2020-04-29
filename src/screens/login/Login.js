import React, { useState, useRef } from "react";
import { SafeAreaView, View, TextInput, Animated, Platform, UIManager, LayoutAnimation } from "react-native";
import { Text, Button } from "native-base";
import { navigate } from "src/navigation/NavigationRef";
import { styles } from "./styles";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isShown, setIsShown] = useState(false);
  const opacityForm = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setIsShown(true);
    Animated.timing(opacityForm,{
      toValue: 1,
      duration: 3000
    }).start();
  }

  const fadeOut = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setIsShown(false);
    Animated.timing(opacityForm, {
      toValue: 0,
      duration: 3000
    }).start();
  }

  return (
    <SafeAreaView style={styles.container}>
        {isShown ? <Animated.View style={[styles.fadedContainer, {opacity: opacityForm}]}>
          <TextInput value={login} placeholder="Login" onChangeText={(value) => {setLogin(value)}} style={styles.borderedInput} />
          <TextInput value={password} placeholder="Password" secureTextEntry onChangeText={(value) => {setPassword(value)}} style={styles.borderedInput} />
        </Animated.View> : null }
        <View >
        <Button
          success
          rounded
          large
          onPress={() => {
            isShown ? fadeOut() : fadeIn();
          }}
        >
          <Text>Login</Text>
        </Button>
        </View>
        <View>
        <Button
          primary
          rounded
          large
          onPress={() => {
            navigate("Home");
          }}
        >
          <Text>Home</Text>
        </Button>
        </View>
    </SafeAreaView>
  );
};

export default Login;
