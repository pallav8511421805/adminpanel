import * as actiontype from '../actions/actiontype';

const intval = {
    isload: false,
    error: '',
    patient: []
}
export const Patientsreducer = (state = intval, action) => {
    
    switch (action.type) {
        case actiontype.get_patients:
            return {
                ...state,
                isload: false,
                patient: action.payload,
                errors: ''
            }
        case actiontype.Load_MEDICINE:
            return {
                ...state,
                isload: true,
                errors: ''
            }
        case actiontype.ERROR_MEDICINE:
            return {
                ...state,
                isload: false,
                patient: [],
                errors: action.payload
            }
        default:
            return state;
    }
}