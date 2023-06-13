import { get } from '@/service/base'
import { ref } from 'vue'

interface JobListParams {
  pageNum: number
  pageSize: number
}

export const getJobList = (params: JobListParams) => get<Array<Job>>('api/jobList', params)

export const getJobDetail = (params: { id: number }) => get<Job>('api/jobDetail', params)

export function useJobList() {
  const jobList = ref<Array<Job>>([])
  async function _getJobList() {
    const { data } = await getJobList({ pageNum: 1, pageSize: 10 })
    return data
   
  }
  async function refresh() {
    jobList.value = await  _getJobList()
  }
  return { jobList, refresh }
}
