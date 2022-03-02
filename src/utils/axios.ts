import axios, { AxiosInstance } from 'axios'
// eslint-disable-next-line
import { Toast } from 'vant'

// eslint-disable-next-line

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: 30 * 1000
  // withCredentials: true
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // if (store.getters.getToken) {
    //   config.headers.Authorization = `Bearer ${getToken()}`
    // }
    // config.headers['x-csrf-token'] = getCsrfToken()
    return config
  },
  error => {
    Toast.fail(error.toString())
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      Toast.fail(res.message)
      return Promise.reject(res)
    } else {
      return response
    }
  },
  error => {
    Toast.fail(error.toString())
    return Promise.reject(error)
  }
)

export default service
