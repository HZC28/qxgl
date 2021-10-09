import request from '../../utils/request.js'
export let login=(params)=>{
    return request({
        method: 'post',
        url: "/api/user/login",
        params
    })
}
export let test=(params)=>{
    return request({
        method: 'post',
        url: "/api/user/test",
        params
    })
}
