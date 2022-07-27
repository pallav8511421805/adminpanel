import * as actiontype from '../actions/actiontype';

const intival = {
  isload: false,
  medicine: [],
  errors: ''
}
export const medReducer = (state = intival, action) => {
  
  switch (action.type) {
    case actiontype.GET_MEDICINE:
      return {
        ...state,
        isload: false,
        medicine: action.payload,
        errors: ''
      }
      case actiontype.Add_MEDICINE:
      return {
        ...state,
        isload: false,
        medicine: state.medicine.concat(action.payload),
        errors: ''
      }
      case actiontype.Delete_MEDICINE:
      return {
        ...state,
        isload: false,
        medicine: state.medicine.filter((l) => l.id !== action.payload),
        errors: ''
      }
      case actiontype.Edit_MEDICINE:
      return {
        ...state,
        isload: false,
        medicine: state.medicine.map((m) => {
              if (m.id === action.payload.id) {
                  return action.payload;
              } else {
                  return m;
              }
          }),
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
        medicine:[],
        errors: action.payload
      }
    default:
      return state;
  }
}