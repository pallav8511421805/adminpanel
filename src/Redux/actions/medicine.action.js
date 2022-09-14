import { baseurl } from '../../Baseurl/baseurl'
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { db, storage } from '../../Firebase'
import {
  addalldata,
  Deletealldata,
  editmedicinedata,
  getalldata,
} from '../../comman/apis/medicine.api'
import * as actiontype from '../actions/actiontype'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'

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
      const filename = Math.floor(Math.random()*100000);
      const medRef = ref(storage, 'Medicines/' + filename)
      uploadBytes(medRef, data.pname).then(async (snapshot) => {
        getDownloadURL(snapshot.ref)
        .then(
          async (url) => {
            const docRef = await addDoc(collection(db, 'Medicines'), 
            {...data,pname: url,filename : filename})
            dispatch({
              type: actiontype.Add_MEDICINE,
              payload: { ...data, id: docRef.id, pname: url,filename:filename},
            })
          },
        )
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

export const deletedata = (data) => async (dispatch) => {
  try {
    const medRef = ref(storage, 'Medicines/' + data.filename)
    deleteObject(medRef)
    .then(async() => {
      await deleteDoc(doc(db, 'Medicines', data.id))
      dispatch({ type: actiontype.Delete_MEDICINE, payload: data.id })
    })
    .catch((error) => {
      dispatch(errordata(error.message))
    });
    
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
    if(typeof data.pname === 'string'){
      const res = await medRef.update({
        name: data.name,
        quantity: data.quantity,
        price: data.price,
        expiry: data.expiry,
        filename: data.filename,
        pname: data.pname,
      })
      dispatch({ type: actiontype.Edit_MEDICINE, payload: data })
    } else{
      const filename1 = Math.floor(Math.random()*100000);
      const oldimgref = ref(storage, 'Medicines/' + data.filename)
      const newimgref = ref(storage, 'Medicines/' + filename1)
      deleteObject(oldimgref)
    .then(async() => {
      uploadBytes(newimgref,data.pname).then(async (snapshot) => {
        getDownloadURL(snapshot.ref)
        .then(
          async (url) => {
            dispatch({
              type: actiontype.Edit_MEDICINE,
              payload: { ...data,pname: url,filename:filename1}
            })
          },
        )
      })
    })
    .catch((error) => {
      dispatch(errordata(error.message))
    });
    }
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
