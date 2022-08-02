import { addrequstdata,sendrequstdata } from "../requst"

export const getalldata = () => {
   return sendrequstdata('doctor')
}

export const addalldata = (data) => {
   return addrequstdata('doctor', data)
}