import {
    WEATHER_PENDING
} from './Weather.actions';

const initialState = {
    loading: false,
    error: false,
    weathers: []
}

export const WeatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case WEATHER_PENDING:
            return {
                ...state,
                loading: true
            }
        default:
            return state   
    }
}