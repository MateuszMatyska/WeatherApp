export const WEATHER_PENDING = "WEATHER_PENDING";
export const weatherPending = () => {
    return async dispatch => {
        dispatch({
            type: WEATHER_PENDING,
        })
    }
} 