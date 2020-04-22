import { GET_WEATHER } from "./Weather.actions";

const initialState = {
  loading: false,
  error: false,
  weathers: [],
};

export const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER.pending:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_WEATHER.resolved:
      return {
        ...state,
        loading: false,
        weathers: action.payload,
      };
    case GET_WEATHER.rejected:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
