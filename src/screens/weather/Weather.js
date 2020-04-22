import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { View, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "src/redux/weather/Weather.actions";
import {
  loadingSelector,
  weathersSelector,
} from "src/redux/weather/Weather.selector";

const Weather = (props) => {
  const dispatch = useDispatch();

  const loading = useSelector(loadingSelector);
  const weathers = useSelector(weathersSelector);

  useEffect(() => {
    dispatch(getWeather());
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Weather Screen</Text>
        <Text>{`${loading ? "True" : "False"}`}</Text>
        <Text>{`${JSON.stringify(weathers)}`}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Weather;
