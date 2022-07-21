import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";

export const Rootreducer = combineReducers({
    counter: counterReducer ,   
})