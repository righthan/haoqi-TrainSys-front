import request from '@/utils/request'

export function add(data) {
    return request({
        url: '/sign/add',
        method: 'POST',
        data
    })
}

export function deleteSign(params) {
    return request({
        url: '/sign/delete',
        method: 'DELETE',
        params
    })
}

export function query(params) {
    return request({
        url: '/sign/query',
        method: 'GET',
        params
    })
}

export function queryCourse(params) {
    return request({
        url: '/sign/queryCourse',
        method: 'GET',
        params
    })
}

export function queryById(params) {
    return request({
        url: '/sign/queryById',
        method: 'GET',
        params
    })
}

export function queryDetail(params) {
    return request({
        url: '/sign/queryDetail',
        method: 'GET',
        params
    })
}

export function update(data) {
    return request({
        url: '/sign/update',
        method: 'POST',
        data
    })
}

export function changeEvaluateState(data) {
    return request({
        url: '/sign/changeEvaluateState',
        method: 'PUT',
        headers: {
            "Content-Type": "multipart/form-data"
        },
        data
    })
}