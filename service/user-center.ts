import { get } from '@/service/base'

export const getUserinfo = (params?: any) => get<Userinfo>('app/info', params)
export async function _getUserinfo() {
  const { data } = await getUserinfo()
  return data
}
