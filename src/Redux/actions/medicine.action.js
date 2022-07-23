import { baseurl } from '../../Baseurl/baseurl';
import * as actiontype from '../actions/actiontype';

export const medicinedata = () => (dispatch) =>{

    try {
      fetch(baseurl+ 'medicine')
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
          error => {
            let errmess = new Error(error.message);
            throw errmess;
          })
        .then(response => response.json())
        .then(data => dispatch(({ type: actiontype.getmed, payload: data })))
        .catch(error => console.log(error.message));
    } catch (error) {
      console.log(error);
    }
}