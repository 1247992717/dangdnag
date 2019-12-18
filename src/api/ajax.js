import axios from "axios"
import qs from "qs"
import { Indicator,MessageBox } from 'mint-ui'
import store from "@/vuex/store"
import router from "@/router"

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

    const token = store.state.token;
    if(token){
        config.headers['Authorization'] = token;
    } else {
        const needCheck = config.headers.needCheck
        // 如果没有token, 但又需要token校验, 不能发请求
        if (needCheck) {
            throw new Error('没有登陆, 不能请求!')
        }
    }

    return config;
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    Indicator.close();
    return response.data;

}, function (error) {
    Indicator.close();

    if(!error.response){
        const path = router.currentRoute.path
        if(path !== "/login"){
            router.replace({path:"/login"})
        }
    } else {
        if(error.response.status === 401){
            const path = router.currentRoute.path
            if(path !== "/login"){
                router.replace({path:"/login"})
                store.dispatch("logout")
            }
        } else if(error.response.status === 404){
            MessageBox('提示', '访问的资源不存在')
        } else {
            MessageBox('提示', '请求出错: ' + error.message)
        }
    }

    return new Promise(() => {})
});


export default instance