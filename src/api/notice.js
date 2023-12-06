import request from '@/utils/request'

export function add(data) {
    return request({
        url: '/notice/submit',
        method: 'POST',
        data
    })
}

export function deleteNotice(params) {
    return request({
        url: '/notice/delete',
        method: 'DELETE',
        params
    })
}

export function queryPage(params) {
    return request({
        url: '/notice/query',
        method: 'GET',
        params
    })
}

export function queryDetail(params) {
    return request({
        url: '/notice/queryDetail',
        method: 'GET',
        params
    })
}

export function update(data) {
    return request({
        url: '/notice/update',
        method: 'POST',
        data
    })
}