import * as actiontype from '../actions/actiontype';

export const Increment = () => (dispatch) =>{
    dispatch({type : actiontype.increment})
}
export const Decrement = () => (dispatch) =>{
    dispatch({type : actiontype.decrement})
}