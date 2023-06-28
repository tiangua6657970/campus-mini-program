import { get } from '@/service/base'
import { useSearch } from '@/common/hooks/use-search'
import { ref } from "vue";

export const getInterviewList = (params?: any) => get<Interview[]>('api/interviewList', params)
export const getInterviewDetail = (params?: any) => get<Interview>('api/interviewInfo', params)

async function _getInterviewList(params: any) {
  const { data } = await getInterviewList(params)
  return data
}
export function useSearchInterviewList() {
  const { loadStatus, loadMore, loadResult, noData, refresh, setParamsAndRefresh } =
    useSearch<Interview>(_getInterviewList)
  return { loadStatus, loadMore, loadResult, noData, refresh, setParamsAndRefresh }
}

export function useInterviewDetail() {
  const interviewDetail = ref<Interview>()
   async function _getInterviewDetail() {
     const { data } = await getInterviewDetail()
     return data
  }
  async function refresh() {
     interviewDetail.value = await _getInterviewDetail()
  }
  return { interviewDetail, refresh }
}