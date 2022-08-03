import { baseurl } from '../../Baseurl/baseurl';
import { addalldata, Deletealldata, editdocalldata, getalldata } from '../../comman/apis/doctor.api';
import * as actiontype from '../actions/actiontype';

export const doctordata = () => (dispatch) => {

  try {
    dispatch(loaddata())
    setTimeout(function () {
      getalldata()
        .then(data => dispatch(({ type: actiontype.get_doctor, payload: data.data })))
        .catch(error => dispatch(errordata(error.message)));
      // fetch(baseurl + 'doctor')
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
      // .then(data => dispatch(({ type: actiontype.get_doctor, payload: data})))
      //   .catch(error => dispatch(errordata(error.message)));
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

export const adddata = (data) => (dispatch) => {

  try {
    dispatch(loaddata())
    setTimeout(() => {
      addalldata(data)
        .then(data => dispatch(({ type: actiontype.Add_doctor, payload: data.data })))
        .catch(error => dispatch(errordata(error.message)));
      // fetch(baseurl + 'doctor')
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
      // fetch(baseurl + 'doctor', {
      //   method: 'POST', // or 'PUT'
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // })
      //   .then(response => response.json())
      // .then(data => dispatch(({ type: actiontype.Add_doctor, payload: data })))
      // .catch(error => dispatch(errordata(error.message)));
    }, 2000);

  } catch (error) {
    dispatch(errordata(error.message))
  }
}

export const deletedata = (id) => (dispatch) => {
  try {
    Deletealldata(id)
      .then(dispatch(({ type: actiontype.Delete_doctor, payload: id })))
      .catch(error => dispatch(errordata(error.message)));
    // fetch(baseurl + 'doctor')
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

    // fetch(baseurl + 'doctor/' + id, {
    //   method: 'DELETE',
    // })
    //   .then(data => dispatch(({ type: actiontype.Delete_doctor, payload: data })))
    //   .catch(error => dispatch(errordata(error.message)));

  } catch (error) {
    dispatch(errordata(error.message))
  }
}

export const editdata = (data) => (dispatch) => {

  try {
    dispatch(loaddata())
    setTimeout(() => {
      editdocalldata(data)
        .then(data => dispatch(({ type: actiontype.Edit_doctor, payload: data.data })))
        .catch(error => dispatch(errordata(error.message)));
      // fetch(baseurl + 'doctor')
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
      // fetch(baseurl + 'doctor/' + data.id, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // })
      //   .then(response => response.json())
      //   .then(data => dispatch(({ type: actiontype.Edit_doctor, payload: data })))
      //   .catch(error => dispatch(errordata(error.message)));
    }, 2000);

  } catch (error) {
    dispatch(errordata(error.message))
  }
}