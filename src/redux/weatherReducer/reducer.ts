import { IAction } from "../../types/allTypes";
import weatherActionTypes from "./action-types";

const initialState = {
    currentCity: null,
    currentWeather: null,
    currentForecast: null,
};

const weatherReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case weatherActionTypes.SET_CITY:
            return { ...state, currentCity: action.payload };
        case weatherActionTypes.SET_WEATHER:
            return { ...state, currentWeather: action.payload };
        case weatherActionTypes.SET_FORECAST:
            return {...state, currentForecast: action.payload}
        default:
            return state;
    }
}

export default weatherReducer;