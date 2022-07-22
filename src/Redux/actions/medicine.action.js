import { baseurl } from '../../Baseurl/baseurl';
import * as actiontype from '../actions/actiontype';

export const ed = () => (dispatch) =>{
    // return fetch(baseurl + 'medicines')
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //       error.response = response;
    //       throw error;
    //     }
    //   },
    //     error => {
    //       var errmess = new Error(error.message);
    //       throw errmess;
    //     })
    //   .then(response => response.json())
    //   .then(medicines => dispatch(({ type: actiontype.getmed, payload:medicines})))
    //   .catch(error => dispatch(medicinesFailed(error.message)));
   return fetch(baseurl + 'medicines')
  .then(response => response.json())
  .then(data => console.log(data));
}