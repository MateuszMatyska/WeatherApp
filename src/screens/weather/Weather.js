import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { View, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { weatherPending } from "src/redux/weather/Weather.actions";
import { loading as loadingSelector } from "src/redux/weather/Weather.selector";

const Weather = (props) => {
  const dispatch = useDispatch();

  const loading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(weatherPending());
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Weather Screen</Text>
        <Text>{`${loading ? "True" : "False"}`}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Weather;
