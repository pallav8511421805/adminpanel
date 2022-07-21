import * as actiontype from '../actions/actiontype';

const intival = { 
  isload: false,
  medicine:[],
}
export const counterReducer = (state = intival, action) =>{
    switch (action.type) {
      case actiontype.med : 
        return { 
          ...state,
          med: state.med  
        }
      default:
        return state;
    }
  }