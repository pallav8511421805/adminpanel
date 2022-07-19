import * as actiontype from '../actions/actiontype';

const intival = { 
  counter : 0
}
export const counterReducer = (state = intival, action) =>{
    switch (action.type) {
      case actiontype.increment : 
        return { 
          ...state,
          counter: state.counter + 1 }
      case actiontype.decrement :
        return { 
          ...state,
          counter: state.counter - 1}
      default:
        return state;
    }
  }