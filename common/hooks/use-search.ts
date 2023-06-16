import { ref, watch } from 'vue'
import { debounce } from '@/common/utils'

interface Params {
  pageNum?: number
  pageSize?: number
  id?:number

  [prop: string]: any
}

export function useSearch<R>(fetch:  (params: any) => any) {
  const query = ref('')
  const loadResult = ref<R[]>([])
  const loadStatus = ref('loadmore') // loadmore | loading | nomore
  const noData = ref(false)
  const params: Params = { pageNum: 1, pageSize: 10 }
  const queryCallbacks: ((query: string) => any)[] = []
  watch(query, newVal => {
    params.query = newVal
    debounce(async () => {
      await refresh()
      queryCallbacks.forEach(callback => callback(newVal))
    })
  })

  async function loadMore(callback?: Function) {
    if (loadStatus.value === 'nomore') {
      return
    }
    params.pageNum!++
    loadStatus.value = 'loading'
    const data = await fetch(params)
    _setLoadStatus(data.length)
    loadResult.value = loadResult.value.concat(data)
    callback && callback()
  }

  async function refresh(callback?: Function) {
    params.pageNum = 1
    params.pageSize = 10
    const data = await fetch(params)
    noData.value = !data.length
    _setLoadStatus(data.length)
    loadResult.value = data
    callback && callback()
    return data
  }

  function _setLoadStatus(length: number) {
    if (!length) {
      loadStatus.value = 'nomore'
    } else {
      loadStatus.value = 'loadmore'
    }
  }

  async function setParamsAndRefresh(key: string, value: any, callback?: Function) {
    params[key] = value
    return await refresh(callback)
  }

  async function resetParamsAndRefresh(callback?: Function) {
    for (const paramsKey in params) {
      params[paramsKey] = undefined
    }
    return await refresh(callback)
  }
  
  function setQueryCallback(callback: (query: string) => any) {
    queryCallbacks.push(callback)
  }

  return {
    query,
    loadResult,
    loadStatus,
    noData,
    refresh,
    loadMore,
    setParamsAndRefresh,
    resetParamsAndRefresh,
    setQueryCallback
  }
}
