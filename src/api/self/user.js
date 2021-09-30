import request from '../../utils/request.js'
export let login=(params)=>{
    return request({
        method: 'post',
        url: "/api/user/login",
        params
    })
}