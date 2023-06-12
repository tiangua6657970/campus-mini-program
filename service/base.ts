import { HttpRequest, Methods } from './request'

const httpRequest = new HttpRequest({
  baseUrl: 'https://mock.apifox.cn/m1/2859811-0-default',
  loadingTime: 500
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
httpRequest.interceptor.request = (config) => {
  return config
}
// httpRequest.interceptor.response = (response) => {
//   return response
// }

/**
 * @example
 * interface Job {
 *   jobTitle: string
 *   workLocation: string
 *   salary: number
 * }
 * export function getJobList() {
 *   return get<Array<Job>>('api/jobList')
 * }
 * @param url
 * @param params
 */
export function get<R, P = {}>(url: string, params?: P) {
  return request<R>(url, 'GET', params)
}
export function post<R, P = {}>(url: string, data?: P) {
  return request<R>(url, 'POST', data)
}

interface Job {
  jobTitle: string
  workLocation: string
  salary: number
}
export function getJobList() {
  return get<Array<Job>>('api/jobList')
}
