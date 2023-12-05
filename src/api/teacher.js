import request from '@/utils/request'

export function add(data) {
    return request({
        url: '/teacher/add',
        method: 'POST',
        data
    })
}

export function deleteTeacher(params) {
    return request({
        url: '/teacher/delete',
        method: 'DELETE',
        params
    })
}

export function query(params) {
    return request({
        url: '/teacher/query',
        method: 'GET',
        params
    })
}

export function queryDetail(params) {
    return request({
        url: '/teacher/queryDetail',
        method: 'GET',
        params
    })
}

export function update(data) {
    return request({
        url: '/teacher/update',
        method: 'POST',
        data
    })
}