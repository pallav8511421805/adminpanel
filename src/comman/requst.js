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