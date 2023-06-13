import { post } from '@/service/base'

interface loginParams {
  code: string
  rawData: string
  signature: string
  encryptedData: any
  iv: string
}

export function loginWithWx(data: loginParams) {
  return post<any>('api/app/loginWx', data)
}
