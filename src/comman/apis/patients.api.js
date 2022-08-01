import { addrequstdata, sendrequstdata } from "../requst"

export const getallpatients = () =>{
return sendrequstdata('Patients')
}

export const addallpatients = (data) =>{
    return addrequstdata('Patients',data)
}