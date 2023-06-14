import { get } from '@/service/base'
import { Ref, ref } from 'vue'
import { useSearch } from '@/common/hooks/use-search'

interface JobListParams {
  pageNum: number
  pageSize: number

  [prop: string]: any
}

export const getJobList = (params: JobListParams) => get<Array<Job>>('api/jobList', params)

export const getJobDetail = (params: { id: number }) => get<Job>('api/jodInfo', params)

async function _getJobList(params: JobListParams) {
  const { data } = await getJobList(params)
  return data
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
    resetParamsAndRefresh
  } =  useSearch(_getJobList)
  return {
    query,
    loadResult: loadResult as unknown as Ref<Array<Job>>,
    loadStatus,
    noData,
    refresh,
    loadMore,
    setParamsAndRefresh,
    resetParamsAndRefresh
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