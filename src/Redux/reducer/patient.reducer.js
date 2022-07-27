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
            case actiontype.Edit_patient:
            return {
                ...state,
                isload: false,
                patientdata: state.patientdata.map((p) => {
                    if (p.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return p;
                    }
                }),
                error: ''
            }
            case actiontype.Delete_patient:
            return {
                ...state,
                isload: false,
                patientdata: state.patientdata.filter((d) => d.id !== action.payload.id),
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