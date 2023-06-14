import { ref, watch } from 'vue'
import { debounce } from '@/common/utils'

interface Params {
  pageNum: number
  pageSize: number

  [prop: string]: any
}

export function useSearch<F extends (params: Params) => any>(fetch: F) {
  const query = ref('')
  const loadResult = ref([])
  const loadStatus = ref('loadmore') // loadmore | loading | nomore
  const noData = ref(false)
  const params: Params = { pageNum: 1, pageSize: 10 }
  watch(query, newVal => {
    params.query = newVal
    debounce(() => refresh())
  })

  async function loadMore(callback?: Function) {
    if (loadStatus.value === 'nomore') {
      return
    }
    params.pageNum++
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

  return {
    query,
    loadResult,
    loadStatus,
    noData,
    refresh,
    loadMore,
    setParamsAndRefresh,
    resetParamsAndRefresh
  }
}
