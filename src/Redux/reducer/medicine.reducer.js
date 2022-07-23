import * as actiontype from '../actions/actiontype';

const intival = { 
  isload: false,
  medicine:[],
  errors:''
}
export const medReducer = (state = intival, action) =>{
  console.log(state, action.payload, action.type);
    switch (action.type) {
      case actiontype.GET_MEDICINE: 
        return { 
          ...state,
          isload: false,
          medicine:action.payload,
          errors:''
        }
      default:
        return state;
    }
  }