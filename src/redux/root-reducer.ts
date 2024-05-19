import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer/reducer";

const rootReducer = combineReducers({weatherReducer});

export default rootReducer;