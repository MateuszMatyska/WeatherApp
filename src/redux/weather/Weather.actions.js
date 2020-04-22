import { actionGenerator } from "src/utils/GenerateAction";

export const GET_WEATHER = actionGenerator("GET_WEATHER");

export const getWeather = () => {
  return {
    type: GET_WEATHER.handler,
  };
};

export const getWeatherPending = () => {
  return {
    type: GET_WEATHER.pending,
  };
};

export const getWeatherResolved = (weathers) => {
  return {
    type: GET_WEATHER.resolved,
    payload: weathers,
  };
};

export const getWeatherRejected = () => {
  return {
    type: GET_WEATHER.rejected,
  };
};
