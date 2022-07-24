import { baseurl } from '../../Baseurl/baseurl';
import * as actiontype from '../actions/actiontype';

export const medicinedata = () => (dispatch) =>{

  try {
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
      .then(medicine => dispatch(({ type: actiontype.GET_MEDICINE, payload: medicine })))
      .catch(error => console.log(error.message));
  } catch (error) {
    console.log(error);
  }

}