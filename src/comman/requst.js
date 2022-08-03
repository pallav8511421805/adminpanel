import { baseurl } from "../Baseurl/baseurl";
import axios from "axios";

const instance = axios.create({
    baseURL: baseurl,
    timeout: 2000,
});

const getdata = (config) => {
    return instance.request(config)
}
export const sendrequstdata = (path) => {
    return getdata({
        url: path,
        method: 'GET',
    })
}
export const addrequstdata = (path, data) => {
    return getdata({
        url: path,
        data: JSON.stringify(data),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export const deleterequstdata = (path, id) => {
    return getdata({
        url: path + id,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export const Editrequstdata = (path, data) => {
    return getdata({
        url: path + data,
        method: "PUT",
        data:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}