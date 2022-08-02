import { baseurl } from '../../Baseurl/baseurl';
import * as actiontype from '../actions/actiontype';

export const doctordata = () => (dispatch) => {

  try {
    dispatch(loaddata())
    setTimeout(function () {
      fetch(baseurl + 'doctor')
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
          error => {
            var errmess = new Error(error.message);
            throw errmess;
          })
        .then(response => response.json())
      .then(data => dispatch(({ type: actiontype.get_doctor, payload: data})))
        .catch(error => dispatch(errordata(error.message)));
    }, 2000)
  } catch (error) {
    dispatch(errordata(error.message))
  }
}

export const loaddata = () => (dispatch) => {
  dispatch({ type: actiontype.Load_doctor })
}
export const errordata = (error) => (dispatch) => {
  dispatch({ type: actiontype.ERROR_doctor, payload: error })
}