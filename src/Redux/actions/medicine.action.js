import { baseurl } from '../../Baseurl/baseurl'
import { collection, addDoc, getDocs, doc, deleteDoc, } from 'firebase/firestore'
import { db } from '../../Firebase'
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
    setTimeout(async function () {
      let data = []
      const querySnapshot = await getDocs(collection(db, 'Medicines'))
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id })
      })
      dispatch({ type: actiontype.GET_MEDICINE, payload: data })

      // getalldata()
      //   .then((data) =>
      //     dispatch({ type: actiontype.GET_MEDICINE, payload: data.data }),
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

export const adddata = (data) => (dispatch) => {
  try {
    dispatch(loaddata())
    setTimeout(async () => {
      const docRef = await addDoc(collection(db, 'Medicines'), data)
      dispatch({
        type: actiontype.Add_MEDICINE,
        payload: { ...data, id: docRef.id },
      })
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

export const deletedata = (id) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, 'Medicines', id))
    dispatch({ type: actiontype.Delete_MEDICINE, payload: id })
    // Deletealldata(id)
    //   .then(dispatch({ type: actiontype.Delete_MEDICINE, payload: id }))
    //   .catch((error) => dispatch(errordata(error.message)))
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

export const editdata = (data) => async (dispatch) => {
  try {
    const medRef = db.collection('Medicines').doc(data.id)
    const res = await medRef.update({
      name: data.name,
      quantity: data.quantity,
      price: data.price,
      expiry: data.expiry,
    })
    dispatch({ type: actiontype.Edit_MEDICINE, payload: data })
    // editmedicinedata(data)
    //   .then((data) =>
    //     dispatch({ type: actiontype.Edit_MEDICINE, payload: data.data }),
    //   )
    //   .catch((error) => dispatch(errordata(error.message)))
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
