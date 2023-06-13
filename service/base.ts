import { HttpRequest, Methods } from './request'

const devUrl = 'http://192.168.1.34:8084'
const mockUrl = 'https://mock.apifox.cn/m1/2859811-0-default'
const httpRequest = new HttpRequest({
  baseUrl: devUrl,
  loadingTime: 500,
  showLoading: false
})

export function request<R>(url: string, method: Methods, data: any = {}) {
  return httpRequest
    .request({
      url,
      method,
      data
    })
    .then(res => {
      if (res.code !== 200) {
        return { err: 1, data: undefined as R }
      } else {
        return { err: 0, data: res.data as R }
      }
    })
    .catch(err => {
      console.log('[server err] :', err)
      return { err: 1, data: undefined as R }
    })
}

httpRequest.interceptor.request = config => {
  console.log('interceptor.request', config)
  return config
}
httpRequest.interceptor.response = (response) => {
  console.log(response,'response')
  return response
}

/**
 * @example
 * interface Job {
 *   jobTitle: string
 *   workLocation: string
 *   salary: number
 * }
 * export function getJobList() {
 *   return get<Array<Job>>("api/jobList")
 * }
 * @param url
 * @param params
 */
export function get<R>(url: string, params?: any) {
  return request<R>(url, 'GET', params)
}

export function post<R>(url: string, data?: any) {
  return request<R>(url, 'POST', data).then(res => {
    return res
  })
}
