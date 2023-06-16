import { get } from '@/service/base'
import { ref } from 'vue'
type CompanyListParams = PagingParams & Id
export const getCompanyList = (params: CompanyListParams) => get<Company[]>('api/companyList', params)
export const getCompanyDetails = (params: Id) => get<Company>('api/companyInfo', params)

export function useCompanyDetails(props: Id) {
  const companyDetails = ref<Company>()

  async function _getCompanyDetails() {
    const { data } = await getCompanyDetails(props)
    return data
  }
  async function refresh() {
     companyDetails.value = await _getCompanyDetails()
  }
  return { companyDetails, refresh}
}

export function useCompanyList(props: Id) {
  const companyList = ref<Company[]>([])
  const noData = ref(false)
  async function _getCompanyList() {
    const { data } = await getCompanyList(props)
    return data
  }
  async function refresh() {
    companyList.value = await _getCompanyList()
    noData.value = !companyList.value.length
  }
  return { companyList, refresh, noData}
}