import { display } from '@mui/system';
import { baseurl } from '../../Baseurl/baseurl';
import * as actiontype from '../actions/actiontype';

export const medicinedata = () => (dispatch) =>{
 dispatch(loaddata())
  try {
    setTimeout(function () {
      fetch(baseurl + 'medicine')
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
      .then(data => dispatch(({ type: actiontype.GET_MEDICINE, payload: data })))
      .catch(error => console.log(error.message));
    },2000)
  } catch (error) {
    console.log(error);
  }
}

export const loaddata = () => (dispatch) =>{
  dispatch({ type: actiontype.Load_MEDICINE})
} 