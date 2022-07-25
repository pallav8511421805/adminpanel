import * as actiontype from '../actions/actiontype';

const intival = { 
  isload: false,
  medicine:[],
  errors:''
}
export const medReducer = (state = intival, action) =>{
    switch (action.type) {
      case actiontype.GET_MEDICINE: 
        return { 
          ...state,
          isload: false,
          medicine:action.payload,
          errors:''
        }
        case actiontype.Load_MEDICINE: 
        return { 
          ...state,
          isload: true,
          errors:''
        }
      default:
        return state;
    }
  }