import { addrequstdata, deleterequstdata, sendrequstdata } from "../requst"

export const getallpatients = () =>{
return sendrequstdata('Patients')
}

export const addallpatients = (data) =>{
    return addrequstdata('Patients',data)
}

export const Deleteallpatients = (id) => {
    return deleterequstdata('Patients/', id)
 }
 