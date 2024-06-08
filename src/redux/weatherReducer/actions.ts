import { IAction, ICityList, IFilteredForecast, IFilteredTodayApiResponse } from "../../types/allTypes";
import weatherActionTypes from "./action-types";

export const setCityAction = (city: ICityList): IAction => ({
    type: weatherActionTypes.SET_CITY,
    payload: city[0]
})

export const setWeatherAction = (TodayWeather: IFilteredTodayApiResponse):IAction => ({
    type: weatherActionTypes.SET_WEATHER,
    payload: TodayWeather
})

export const setForecastAction = (weather: IFilteredForecast[]):IAction => ({
    type: weatherActionTypes.SET_FORECAST,
    payload: weather
})