import { IAction, ICity, IFilteredForecast, IFilteredTodayApiResponse } from "../../types/allTypes";
import weatherActionTypes from "./action-types";

export const setCityAction = (city: ICity): IAction => ({
    type: weatherActionTypes.SET_CITY,
    payload: city
})

export const setWeatherAction = (TodayWeather: IFilteredTodayApiResponse):IAction => ({
    type: weatherActionTypes.SET_WEATHER,
    payload: TodayWeather
})

export const setForecastAction = (weather: IFilteredForecast[]):IAction => ({
    type: weatherActionTypes.SET_FORECAST,
    payload: weather
})