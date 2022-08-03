import { addrequstdata, deleterequstdata, sendrequstdata, updateReuestdata } from "../requst"

export const getalldata = () => {
   return sendrequstdata('medicine')
}

export const addalldata = (data) => {
   return addrequstdata('medicine', data)
}

export const Deletealldata = (id) => {
   return deleterequstdata('medicine/', id)
}

export const editmedicinedata = (data) => {
   return updateReuestdata('medicines/', data)
}