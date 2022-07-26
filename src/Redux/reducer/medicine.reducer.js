import * as actiontype from '../actions/actiontype';

const intival = {
  isload: false,
  medicine: [],
  errors: ''
}
export const medReducer = (state = intival, action) => {
  console.log(action.type, action.payload);
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