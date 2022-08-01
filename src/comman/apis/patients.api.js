import { addrequstdata, sendrequstdata } from "../requst"

export const getallpatients = () =>{
return sendrequstdata('Patients')
}

export const addallpatients = () =>{
    return addrequstdata('Patients',data)
}