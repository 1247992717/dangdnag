import axios from "axios"
import qs from "qs"
import { Indicator } from 'mint-ui';

const instance = axios.create({
    baseURL: '/api',
    timeout: 10000,
});


instance.interceptors.request.use(function (config) {
    Indicator.open();
    const data = config.data
    if(data){
        config.data = qs.stringify(data)
    }
    return config;
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    Indicator.close();
    // console.log(response.data);
    return response.data;
}, function (error) {
    Indicator.close();
    console.log(error.message);

    return new Promise(() => {})
});


export default instance