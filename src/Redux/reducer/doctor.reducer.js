import * as actiontype from '../actions/actiontype';

const intival = {
  isload: false,
  doctor: [],
  errors: ''
}
export const doctorreducer = (state = intival, action) => {

  switch (action.type) {
    case actiontype.get_doctor:
      return {
        ...state,
        isload: false,
        doctor: action.payload,
        errors: ''
      }
    case actiontype.Add_doctor:
      return {
        ...state,
        isload: false,
        doctor: state.doctor.concat(action.payload),
        errors: ''
      }
    case actiontype.Delete_doctor:
      return {
        ...state,
        isload: false,
        doctor: state.doctor.filter((l) => l.id !== action.payload),
        errors: ''
      }
    case actiontype.Edit_doctor:
      return {
        ...state,
        isload: false,
        doctor: state.doctor.map((d) => {
          if (d.id === action.payload.id) {
            return action.payload;
          } else {
            return d;
          }
        }),
        errors: ''
      }
    case actiontype.Load_doctor:
      return {
        ...state,
        isload: true,
        errors: ''
      }
    case actiontype.Load_doctor:
      return {
        ...state,
        isload: false,
        doctor: [],
        errors: action.payload
      }
    default:
      return state;
  }
}