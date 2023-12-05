import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 5000
})

// 请求拦截器
request.interceptors.request.use((config) => {
    // 被动退出
    // if (localStorage.getItem('token')) {
    //     if (diffTokenTime()) {
    //         store.dispatch('app/logout')
    //         return Promise.reject(new Error('token失效了'))
    //     }
    // }
    // config.headers.Authorization = localStorage.getItem('token')
    return config;
}, err => {
    return Promise.reject(new Error(err))
})

request.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    return Promise.reject(error);
})

export default request

