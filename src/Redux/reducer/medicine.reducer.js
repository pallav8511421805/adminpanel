import * as actiontype from '../actions/actiontype';

const intival = { 
  isload: false,
  medicine:[],
  errors:''
}
export const medReducer = (state = intival, action) =>{
    switch (action.type) {
      case actiontype.getmed: 
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