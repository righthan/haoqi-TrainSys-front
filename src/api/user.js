import request from '@/utils/request'

// 学员登录
export const studentLogin = (data) => {
    return request({
        url: '/student/login',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        method: 'POST',
        data
    })
}

// 经理, 执行人, 现场工作人员登录
export const executorLogin = (data) => {
    return request({
        url: '/executor/login',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        method: 'POST',
        data
    })
}