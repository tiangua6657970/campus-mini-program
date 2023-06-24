import { get } from '@/service/base'
import { ref } from 'vue'
import { useSearch } from '@/common/hooks/use-search'

export const getJobFairList = (params?: PagingParams) => get<JobFair[]>('app/jobFairs/dc/list', params)
export const getEmployerTalkList = (params?: PagingParams) => get<EmployerTalk[]>('/app/jobFairs/sm/list', params)
export const getJobFairDetails = (params: Id) => get<JobFair>('api/jobFairDetail', params)
export const getEmployerTalkDetails = (params?: PagingParams) =>
  get<EmployerTalk>('api/employerTalkDetails', params)

async function _getJobFairList() {
  const { data } = await getJobFairList()
  return data
}
export function useJobFairList() {
  const jobFairList = ref<JobFair[]>([])
  async function refresh() {
    jobFairList.value = await _getJobFairList()
  }
  return { jobFairList, refresh }
}
export function useSearchJobFairList() {
  const { refresh, loadMore, loadResult, loadStatus, noData } = useSearch<JobFair>(_getJobFairList)
  return {
    refresh,
    loadMore,
    loadResult,
    loadStatus,
    noData
  }
}

export function useEmployerTalkList() {
  async function _getEmployerTalkList() {
    const { data } = await getEmployerTalkList()
    return data
  }

  const { refresh, loadMore, loadResult, loadStatus, noData } = useSearch<EmployerTalk>(_getEmployerTalkList)
  return { refresh, loadMore, loadResult, loadStatus, noData }
}

export function useJobFairDetails(props: Id) {
  const jobFairDetails = ref<JobFair>()
  async function _getJobFairDetails() {
    const { data } = await getJobFairDetails(props)
    return data
  }
  async function refresh() {
    jobFairDetails.value = await _getJobFairDetails()
  }
  return { jobFairDetails, refresh }
}
export function useEmployerTalkDetails() {
  const employerTalkDetails = ref<EmployerTalk>()
  async function _getEmployerTalkDetails() {
    const { data } = await getEmployerTalkDetails()
    return data
  }
  async function refresh() {
    employerTalkDetails.value = await _getEmployerTalkDetails()
  }
  return { employerTalkDetails, refresh }
}