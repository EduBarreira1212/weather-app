import { ICity, IAction, ICityList } from "../../types/allTypes";
import weatherActionTypes from "./action-types";

export const setCityAction = (city: ICityList): IAction => ({
    type: weatherActionTypes.SET_CITY,
    payload: city[0]
})