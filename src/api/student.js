import request from '@/utils/request'

export function add(data) {
    return request({
        url: '/student/add',
        method: 'POST',
        data
    })
}

export function deleteStudent(params) {
    return request({
        url: '/student/delete',
        method: 'DELETE',
        params
    })
}

export function query(params) {
    return request({
        url: '/student/query',
        method: 'GET',
        params
    })
}

export function queryDetail(params) {
    return request({
        url: '/student/queryDetail',
        method: 'GET',
        params
    })
}

export function update(data) {
    return request({
        url: '/student/update',
        method: 'POST',
        data
    })
}