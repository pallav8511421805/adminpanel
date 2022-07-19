import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";

export const rootreducer = () => combineReducers({
counte : counterReducer ,   
})