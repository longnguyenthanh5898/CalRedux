import { calReducer, CAL_KEY } from "./Actions/actionReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({ [CAL_KEY]: calReducer });
