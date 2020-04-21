import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {WeatherReducer} from './weather/Weather.reducer';
import weatherSaga from './weather/Weather.saga';

const reducers = combineReducers({
  weatherReducer: WeatherReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const createAppStore = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(weatherSaga);