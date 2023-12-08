import request from '@/utils/request'

export function queryCourse(params) {
    return request({
        url: '/course/queryPage',
        method: 'GET',
        params
    })
}

export function addCourse(data) {
    return request({
        url: `/course/addCourse`,
        method: 'post',
        data
    });
}

export function queryDetail(params) {
    return request({
        url: '/course/queryDetail',
        method: 'GET',
        params
    })
}

export function update(data) {
    return request({
        url: `/course/update`,
        method: 'post',
        data
    });
}

export function deleteCourse(params) {
    return request({
        url: `/course/delete`,
        method: 'delete',
        params
    });
}

export function changeEvaluateState(data) {
    return request({
        url: '/course/changeEvaluatedState',
        method: 'PUT',
        headers: {
            "Content-Type": "multipart/form-data"
        },
        data
    })
}