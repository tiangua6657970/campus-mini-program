import { get } from '@/service/base'
import { ref } from 'vue'

const getResumeInfo = (params?: any) => get<Resume>('api/resume', params)
const getResumeStudentInfo = (params?: any) => get<Student>('api/resumeStudentInfo', params)

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
    const { data} = await  getResumeStudentInfo()
    return data
  }

  async function refresh(callback?: (student: Student) => any) {
    resumeStudentInfo.value = await _getResumeStudentInfo()
    callback && callback(resumeStudentInfo.value)
  }
  return { resumeStudentInfo, refresh }
}
