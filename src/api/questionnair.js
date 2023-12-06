import request from '@/utils/request'

export function add(data) {
    return request({
        url: '/questionnaire/add',
        method: 'POST',
        data
    })
}

export function deletequestionnaire(params) {
    return request({
        url: '/questionnaire/delete',
        method: 'DELETE',
        params
    })
}

export function query(params) {
    return request({
        url: '/questionnaire/query',
        method: 'GET',
        params
    })
}

export function queryDetail(params) {
    return request({
        url: '/questionnaire/queryDetail',
        method: 'GET',
        params
    })
}

export function update(data) {
    return request({
        url: '/questionnaire/update',
        method: 'POST',
        data
    })
}