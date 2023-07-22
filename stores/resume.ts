import { ref } from 'vue'

const resumeStore = ref<Resume>()

function updateResumeStore(resume: Resume) {
  resumeStore.value = resume
}

function useResumeStore() {
  return { state: resumeStore, updateResumeStore }
}

export default useResumeStore
