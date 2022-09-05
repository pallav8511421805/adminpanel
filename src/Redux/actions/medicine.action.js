import { baseurl } from '../../Baseurl/baseurl'
import { collection, addDoc } from "firebase/firestore"; 
import {
  addalldata,
  Deletealldata,
  editmedicinedata,
  getalldata,
} from '../../comman/apis/medicine.api'
import * as actiontype from '../actions/actiontype'

export const medicinedata = () => (dispatch) => {
  try {
    dispatch(loaddata())
    setTimeout(function () {
      getalldata()
        .then((data) =>
          dispatch({ type: actiontype.GET_MEDICINE, payload: data.data }),
        )
        .catch((error) => dispatch(errordata(error.message)))
      // fetch(baseurl + 'medicine')
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
      // .then(data => dispatch(({ type: actiontype.GET_MEDICINE, payload: data})))
      //   .catch(error => dispatch(errordata(error.message)));
    }, 2000)
  } catch (error) {
    dispatch(errordata(error.message))
  }
}

export const loaddata = () => (dispatch) => {
  dispatch({ type: actiontype.Load_MEDICINE })
}
export const errordata = (error) => (dispatch) => {
  dispatch({ type: actiontype.ERROR_MEDICINE, payload: error })
}

export const adddata = async (data) => (dispatch) => {
  try {
    dispatch(loaddata())
    setTimeout(() => {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
      // addalldata(data)
      //   .then((data) =>
      //     dispatch({ type: actiontype.Add_MEDICINE, payload: data.data }),
      //   )
      //   .catch((error) => dispatch(errordata(error.message)))
      // fetch(baseurl + 'medicine')
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
      // fetch(baseurl + 'medicine', {
      //   method: 'POST', // or 'PUT'
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // })
      //   .then(response => response.json())
      // .then(data => dispatch(({ type: actiontype.GET_MEDICINE, payload: data })))
      // .catch(error => dispatch(errordata(error.message)));
    }, 2000)
  } catch (error) {
    dispatch(errordata(error.message))
  }
}

export const deletedata = (id) => (dispatch) => {
  try {
    Deletealldata(id)
      .then(dispatch({ type: actiontype.Delete_MEDICINE, payload: id }))
      .catch((error) => dispatch(errordata(error.message)))
    //     fetch(baseurl + 'medicine')
    //     .then(response => {
    //       if (response.ok) {
    //         return response;
    //       } else {
    //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //         error.response = response;
    //         throw error;
    //       }
    //     },
    //       error => {
    //         var errmess = new Error(error.message);
    //         throw errmess;
    //       })

    //   fetch(baseurl + 'medicine/' + id, {
    //     method: 'DELETE',
    //   })
    //     .then(data => dispatch(({ type: actiontype.Delete_MEDICINE, payload: data })))
    //     .catch(error => dispatch(errordata(error.message)));
  } catch (error) {
    dispatch(errordata(error.message))
  }
}

export const editdata = (data) => (dispatch) => {
  try {
    editmedicinedata(data)
      .then((data) =>
        dispatch({ type: actiontype.Edit_MEDICINE, payload: data.data }),
      )
      .catch((error) => dispatch(errordata(error.message)))
    // dispatch(loaddata())
    // setTimeout(() => {
    //   fetch(baseurl + 'medicine')
    //     .then(response => {
    //       if (response.ok) {
    //         return response;
    //       } else {
    //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //         error.response = response;
    //         throw error;
    //       }
    //     },
    //       error => {
    //         var errmess = new Error(error.message);
    //         throw errmess;
    //       })
    //   fetch(baseurl + 'medicine/' + data.id, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then(response => response.json())
    //     .then(data => dispatch(({ type: actiontype.Edit_MEDICINE, payload: data })))
    //     .catch(error => dispatch(errordata(error.message)));
    // }, 2000);
  } catch (error) {
    dispatch(errordata(error.message))
  }
}
