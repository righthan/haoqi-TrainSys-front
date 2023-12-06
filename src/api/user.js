import request from '@/utils/request'

export const login = (data) => {
    return request({
        url: '/student/login',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        method: 'POST',
        data
    })
}