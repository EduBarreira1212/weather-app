import { IAction } from "../../types/allTypes";
import weatherActionTypes from "./action-types";

const initialState = {
    currentCity: null,
};

const weatherReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case weatherActionTypes.SET_CITY:
            return { ...state, currentCity: action.payload };
        default:
            return state;
    }
}

export default weatherReducer;