import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* getWeathers() {

}

function* weatherSaga() {
    yield takeLatest("GET_WEATHERS",getWeathers);
}

export default weatherSaga;