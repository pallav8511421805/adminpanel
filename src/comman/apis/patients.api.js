import { addrequstdata, deleterequstdata, sendrequstdata, updateReuestdata } from "../requst"

export const getallpatients = () => {
    return sendrequstdata('Patients')
}

export const addallpatients = (data) => {
    return addrequstdata('Patients', data)
}

export const Deletepatients = (id) => {
    return deleterequstdata('Patients/', id)
}

export const editpatialldata = (data) => {
    return updateReuestdata('Patients/', data)
}