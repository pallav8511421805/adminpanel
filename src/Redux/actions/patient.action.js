import { baseurl } from "../../Baseurl/baseurl";
import { addallpatients, getallpatients } from "../../comman/apis/patients.api";
import * as actiontype from '../actions/actiontype';

export const Getdata = () => (dispatch) => {
    try {
        dispatch(loaddata())
        setTimeout(function () {
            getallpatients()
            .then(data => dispatch(({ type: actiontype.get_patients, payload: data.data })))
            .catch(error => dispatch(errordata(error.message)));
            // fetch(baseurl + 'Patients')
            //     .then(response => {
            //         if (response.ok) {
            //             return response;
            //         } else {
            //             var error = new Error('Error ' + response.status + ': ' + response.statusText);
            //             error.response = response;
            //             throw error;
            //         }
            //     },
            //         error => {
            //             var errmess = new Error(error.message);
            //             throw errmess;
            //         })
            //     .then(response => response.json())
                // .then(data => dispatch(({ type: actiontype.get_patients, payload: data.data })))
                // .catch(error => dispatch(errordata(error.message)));
        }, 2000)
    } catch (error) {
        dispatch(errordata(error.message))
    }
}

export const Adddata = (data) => (dispatch) => {
    try {
        dispatch(loaddata())
        setTimeout(function () {
            addallpatients(data)
                 .then(data => dispatch(({ type: actiontype.Add_patient, payload: data.data })))
                .catch(error => dispatch(errordata(error.message)));
            // fetch(baseurl + 'Patients')
            //     .then(response => {
            //         if (response.ok) {
            //             return response;
            //         } else {
            //             var error = new Error('Error ' + response.status + ': ' + response.statusText);
            //             error.response = response;
            //             throw error;
            //         }
            //     },
            //         error => {
            //             var errmess = new Error(error.message);
            //             throw errmess;
            //         })
            // fetch(baseurl + 'Patients', {
            //     method: 'POST', // or 'PUT'
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(data),
            // })
            //     .then(response => response.json())
            //     .then(data => dispatch(({ type: actiontype.Add_patient, payload: data })))
            //     .catch(error => dispatch(errordata(error.message)));
        }, 2000)
    } catch (error) {
        dispatch(errordata(error.message))
    }
}

export const Editdata = (data) => (dispatch) => {
    try {
            fetch(baseurl + 'Patients')
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
            fetch(baseurl + 'Patients/'+data.id, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => dispatch(({ type: actiontype.Edit_patient, payload: data})))
                .catch(error => dispatch(errordata(error.message)));
        
    } catch (error) {
        dispatch(errordata(error.message))
    }
}

export const Deletedata = (id) => (dispatch) => {
    try {
            fetch(baseurl + 'Patients')
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
                    fetch(baseurl + 'Patients/' + id, {
                        method: 'DELETE',
                      })
                        .then(data => dispatch(({ type: actiontype.Delete_patient, payload: data})))
                        .catch(error => dispatch(errordata(error.message)));
                      
        
    } catch (error) {
        dispatch(errordata(error.message))
    }
}

export const loaddata = () => (dispatch) => {
    dispatch({ type: actiontype.Load_patient })
}

export const errordata = (error) => (dispatch) => {
    dispatch({ type: actiontype.ERROR_patient, payload: error })
}