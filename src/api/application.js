import request from '@/utils/request'

export function add(data) {
    return request({
        url: '/application/submit',
        method: 'POST',
        data
    })
}

export function deleteApplication(params) {
    return request({
        url: '/application/delete',
        method: 'DELETE',
        params
    })
}

export function query(params) {
    return request({
        url: '/application/queryPage',
        method: 'GET',
        params
    })
}

export function queryDetail(params) {
    return request({
        url: '/application/queryDetail',
        method: 'GET',
        params
    })
}

export function update(data) {
    return request({
        url: '/application/change',
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        data
    })
}