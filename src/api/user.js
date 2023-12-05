import request from '@/utils/request'

export const getUsersByCondition = (data) => {
    return request({
        url: '/user/getUsersByCondition',
        method: 'GET',
        params: data
    })
}

export const getUserById = (data) => {
    return request({
        url: '/user/getUserById',
        method: 'GET',
        params: {
            id: data
        }
    })
}

export const updateUserInfo = (data) => {
    return request({
        url: '/user/updateUserInfo',
        method: 'PUT',
        data
    })
}

export const deleteUser = (data) => {
    return request({
        url: '/user/deleteUser',
        method: 'delete',
        params: data
    })
}

export const modifyPassword = (data) => {
    return request({
        url: '/user/updatePassword',
        method: 'PUT',
        params: data
    })
}

export const login = (data) => {
    return request({
        url: '/user/login',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        data
    })
}