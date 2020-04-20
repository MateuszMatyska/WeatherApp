import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {WeatherReducer} from './weather/Weather.reducer';

const reducers = combineReducers({
  weatherReducer: WeatherReducer,
});

export const createAppStore = createStore(reducers, applyMiddleware(thunk));