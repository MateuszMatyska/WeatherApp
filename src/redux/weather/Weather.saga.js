import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    GET_WEATHER,
    getWeatherPending,
    getWeatherRejected,
    getWeatherResolved
} from './Weather.actions';
import {
    getWeather as getWeatherAPI
} from './Weather.api';

function* getWeathers() {
    try {
        yield put(getWeatherPending());
        const weathers = yield getWeatherAPI();
        yield put(getWeatherResolved(weathers));
    }
    catch(e) {
        yield put(getWeatherRejected());
    }
}

function* weatherSaga() {
    yield takeLatest(GET_WEATHER.handler,getWeathers);
}

export default weatherSaga;