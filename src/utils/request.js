import axios from 'axios'
import store from '../vuex/store.js';
import router from '../router/index';
let self=this
import {
  Message,
  MessageBox
} from "element-ui"
let request=axios
request.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头
//添加一个请求拦截器
request.interceptors.request.use(function (config) {
  config.headers.common['token'] = localStorage.getItem('token');
  return config;
}, (error) =>{
  return Promise.reject(error);
});
request.interceptors.response.use(function (config) {
    return config;
  }, (error) =>{
    if (error.response.status === 401){
      try{
        Message({
          message: "登录过期",
          type: "error",
          duration: 3 * 1000
        })
      }catch(err){
        console.log(err)
      }
      console.log("self"+store)
      store.commit('login', 'false')
      localStorage.removeItem('token');
      router.push({ path: '/login' })
    }
    return Promise.reject(error);
  });
export default request