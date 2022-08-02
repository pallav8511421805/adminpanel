import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { doctorreducer } from "./doctor.reducer";
import { medReducer } from "./medicine.reducer";
import { Patientsreducer } from "./patient.reducer";

export const Rootreducer = combineReducers({
    counter: counterReducer ,
    medicine : medReducer ,
    patient : Patientsreducer,
    doctor:doctorreducer,
})