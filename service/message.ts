import { get } from '@/service/base'
import { ref } from 'vue'

export const getMessageList = (params?: any) => get<Message[]>('api/messageList', params)

export function useMessageList() {
  const messageList = ref<Message[]>([])
  async function _getMessageList() {
    const { data  } = await getMessageList()
    return data
  }
  async function refresh() {
    messageList.value = await _getMessageList()
  }
  return { messageList, refresh }
}