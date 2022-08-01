import { addrequstdata, sendrequstdata } from "../requst"

export const getalldata = () => {
   return sendrequstdata('medicine')
}

export const addalldata = (data) => {
   return addrequstdata('medicine',data)
}