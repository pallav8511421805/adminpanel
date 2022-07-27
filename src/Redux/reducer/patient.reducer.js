import * as actiontype from '../actions/actiontype';

const intval = {
    isload: false,
    patientdata: [],
    error: ''
}
export const Patientsreducer = (state = intval, action) => {

    switch (action.type) {
        case actiontype.get_patients:
            return {
                ...state,
                isload: false,
                patientdata: action.payload,
                error: ''
            }
        case actiontype.Add_patient:
            return {
                ...state,
                isload: false,
                patientdata: state.patientdata.concat(action.payload),
                error: ''
            }
        case actiontype.Load_patient:
            return {
                ...state,
                isload: true,
                error: ''
            }
        case actiontype.ERROR_patient:
            return {
                ...state,
                isload: false,
                patientdata: [],
                error: action.payload
            }
        default:
            return state;
    }
}