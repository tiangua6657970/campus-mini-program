import { get } from '@/service/base'
import { ref } from 'vue'
import { useSearch } from '@/common/hooks/use-search'

const getResumeInfo = (params?: any) => get<Resume>('api/resume', params)
const getResumeStudentInfo = (params?: any) => get<Student>('api/resumeStudentInfo', params)
const getResumeExpectedJobInfo = (params?: any) => get<ExpectedJob>('api/expectedJobInfo', params)
const getWorkExperienceInfo = (params?: any) => get<ResumeWorkExperience>('api/workExperienceInfo', params)
const getProjectExperienceInfo = (params?: any) =>
  get<ResumeProjectExperience>('api/projectExperienceInfo', params)
const getResumeList = (params?: any) => get<Resume[]>('/api/resumeList', params)

export function useResumeInfo() {
  const resumeInfo = ref<Resume>()

  async function _getResumeInfo() {
    const { data } = await getResumeInfo()
    return data
  }

  async function refresh() {
    resumeInfo.value = await _getResumeInfo()
  }

  return { resumeInfo, refresh }
}

export function useResumeStudentInfo() {
  const resumeStudentInfo = ref<Student>()
  async function _getResumeStudentInfo() {
    const { data } = await getResumeStudentInfo()
    return data
  }

  async function refresh(callback?: (student: Student) => any) {
    resumeStudentInfo.value = await _getResumeStudentInfo()
    callback && callback(resumeStudentInfo.value)
  }
  return { resumeStudentInfo, refresh }
}
export function useResumeExpectedJobInfo() {
  const resumeExpectedJobInfo = ref<ExpectedJob>()
  async function _getResumeExpectedJobInfo() {
    const { data } = await getResumeExpectedJobInfo()
    return data
  }
  async function refresh(callback?: (expectedJob: ExpectedJob) => void) {
    resumeExpectedJobInfo.value = await _getResumeExpectedJobInfo()
    callback && callback(resumeExpectedJobInfo.value)
  }
  return { resumeExpectedJobInfo, refresh }
}

export function uesWorkExperienceInfo() {
  const workExperienceInfo = ref<ResumeWorkExperience>()
  async function _getWorkExperienceInfo() {
    const { data } = await getWorkExperienceInfo()
    return data
  }
  async function refresh(callback?: (workExperienceInfo: ResumeWorkExperience) => void) {
    workExperienceInfo.value = await _getWorkExperienceInfo()
    callback && callback(workExperienceInfo.value)
  }
  return { workExperienceInfo, refresh }
}

export function useProjectExperienceInfo() {
  const projectExperienceInfo = ref<ResumeProjectExperience>()
  async function _getProjectExperienceInfo() {
    const { data } = await getProjectExperienceInfo()
    return data
  }
  async function refresh(callback?: (projectExperience: ResumeProjectExperience) => void) {
    projectExperienceInfo.value = await _getProjectExperienceInfo()
    callback && callback(projectExperienceInfo.value)
  }
  return { projectExperienceInfo, refresh }
}

export function useSearchResumeList() {
  async function _getResumeList(params: any) {
    const { data } = await getResumeList(params)
    return data
  }

  const { query, loadResult, loadStatus, noData, refresh, loadMore, setParamsAndRefresh, setQueryCallback } =
    useSearch<Resume>(_getResumeList)
  return { query, loadResult, loadStatus, noData, refresh, loadMore, setParamsAndRefresh, setQueryCallback }
}
