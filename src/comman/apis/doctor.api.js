import { addrequstdata, deleterequstdata, sendrequstdata, updateReuestdata } from "../requst"

export const getalldata = () => {
   return sendrequstdata('doctor')
}

export const addalldata = (data) => {
   return addrequstdata('doctor', data)
}

export const Deletealldata = (id) => {
   return deleterequstdata('doctor/', id)
}

export const editdocalldata = (data) => {
   return updateReuestdata('doctor/', data)
}