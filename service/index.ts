import { get } from '@/service/base'
import { Ref, ref } from 'vue'
import { useSearch } from '@/common/hooks/use-search'

type JobListParams =  { id?: string; ids?: string; [prop: string]: any }

export const getJobList = (params: JobListParams) => get<Array<Job>>('api/jobList', params)
export const getJobDetail = (params: Id) => get<Job>('api/jodInfo', params)
export const getIndexSwiperList = (params?: any) => get<Array<Swiper>>('api/indexSwiperList', params)

export function useIndexSwiperList() {
  const swiperList = ref<Array<Swiper>>([])
  async function _getIndexSwiperList() {
    const { data } = await getIndexSwiperList()
    return data
  }
  async function refresh() {
    swiperList.value = await _getIndexSwiperList()
  }
  return {
    swiperList,
    refresh
  }
}
async function _getJobList(params: JobListParams) {
  const { data } = await getJobList(params)
  return data
}

export function useJobList() {
  const jobList = ref<Job[]>([])
  const noData = ref(false)
  async function refresh(key: keyof JobListParams, value: string) {
    jobList.value = await _getJobList({ [key]: value })
    noData.value = !jobList.value.length
  }

  return { jobList, refresh, noData }
}

export function useSearchJobList() {
  const {
    query,
    loadResult,
    loadStatus,
    noData,
    refresh,
    loadMore,
    setParamsAndRefresh,
    resetParamsAndRefresh,
    setQueryCallback
  } =  useSearch<Job>(_getJobList)
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

export function useJobDetails(props: Id) {
  const jobDetails  = ref<Job>()
  async function _getJobDetail() {
    const { data } = await getJobDetail(props)
    return data
  }
  async function refresh() {
    jobDetails.value = await _getJobDetail()
  }
  return { jobDetails, refresh}
}