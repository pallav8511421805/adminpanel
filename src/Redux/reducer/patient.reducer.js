import * as actiontype from '../actions/actiontype';

const intval = {
    isload: false,
    patientdata:[],
    error: ''
}
export const Patientsreducer = (state = intval, action) => {

    switch (action.type) {
        case actiontype.get_patients:
            return {
                ...state,
                isload: false,
                patientdata: action.payload,
                errors: ''
            }
        case actiontype.Load_patient:
            return {
                ...state,
                isload: true,
                errors: ''
            }
        case actiontype.ERROR_patient:
            return {
                ...state,
                isload: false,
                patientdata: [],
                errors: action.payload
            }
        default:
            return state;
    }
}