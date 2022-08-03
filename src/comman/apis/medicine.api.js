import { addrequstdata, deleterequstdata, Editrequstdata, sendrequstdata } from "../requst"

export const getalldata = () => {
   return sendrequstdata('medicine')
}

export const addalldata = (data) => {
   return addrequstdata('medicine', data)
}

export const Deletealldata = (id) => {
   return deleterequstdata('medicine/', id)
}

export const Editalldata = (data,id) => {
   return Editrequstdata('medicine/' + data,id)
}