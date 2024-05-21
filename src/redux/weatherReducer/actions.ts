import { IAction, ICityList, IFilteredForecast } from "../../types/allTypes";
import weatherActionTypes from "./action-types";

export const setCityAction = (city: ICityList): IAction => ({
    type: weatherActionTypes.SET_CITY,
    payload: city[0]
})

export const setWeatherAction = (weather: IFilteredForecast[]):IAction => ({
    type: weatherActionTypes.SET_WEATHER,
    payload: weather
})