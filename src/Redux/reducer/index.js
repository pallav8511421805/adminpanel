import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { medReducer } from "./medicine.reducer";

export const Rootreducer = combineReducers({
    counter: counterReducer ,
    mediciner: medReducer
})