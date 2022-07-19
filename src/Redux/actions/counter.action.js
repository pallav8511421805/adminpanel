import * as actiontype from '../actions/actiontype';

export const Increment = () => (dispatch) =>{
    dispatch(actiontype.increment)
}
export const Decrement = () => (dispatch) =>{
    dispatch(actiontype.decrement)
}