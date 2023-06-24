<script setup lang="ts">
  import { ref } from 'vue'
  import { onReady } from '@dcloudio/uni-app'
  import { getRuleByMessage } from '@/common/hooks/use-form'
  import { useProjectExperienceInfo } from '@/service/resume'

  interface Props {
    type?: 'add' | 'edit'
  }

  const props = withDefaults(defineProps<Props>(), { type: 'add' })
  const formRef = ref()
  const form = ref({
    projectName: '',
    positionName: '',
    startDate: '',
    endDate: '',
    responsibilities: '',
    projectContent: '',
    projectLink: ''
  })
  const startTimeSelectorShow = ref(false)
  const endTimeSelectorShow = ref(false)
  const { refresh } = useProjectExperienceInfo()
  if (props.type === 'edit') {
    refresh(projectExperience => (form.value = projectExperience))
  }
  onReady(() => {
    formRef.value.setRules({
      projectName: getRuleByMessage('请输入项目名称'),
      positionName: getRuleByMessage('请输入岗位'),
      startDate: getRuleByMessage('请选择开始时间'),
      endDate: getRuleByMessage('请选择结束时间'),
      responsibilities: getRuleByMessage('请输入职责描述'),
      projectContent: getRuleByMessage('请输入项目介绍')
    })
  })
  function handleStartTimeSelectorConfirm(result: any) {
    const { year, month, day } = result
    form.value.startDate = `${year}-${month}-${day}`
  }
  function handleEndTimeSelectorConfirm(result: any) {
    const { year, month, day } = result
    form.value.endDate = `${year}-${month}-${day}`
  }
  function save() {
    formRef.value.validate(async (valid: boolean) => {
      if (valid) {
        console.log(form.value, 'form.value')
      }
    })
  }
</script>
<template>
  <view class="resume-project-experience-add p-30">
    <u-form :model="form" ref="formRef">
      <u-form-item label-width="auto" label="项目名称" prop="projectName">
        <u-input v-model="form.projectName" clearable placeholder="请输入项目名称" />
      </u-form-item>
      <u-form-item label-width="auto" label="输入岗位" prop="positionName">
        <u-input v-model="form.positionName" clearable placeholder="请输入岗位" />
      </u-form-item>
      <u-form-item label-width="auto" label="开始时间" prop="startDate">
        <u-input
          v-model="form.startDate"
          clearable
          placeholder="请选择开始时间"
          type="select"
          :select-open="startTimeSelectorShow"
          @click="startTimeSelectorShow = true"
        />
      </u-form-item>
      <u-form-item label-width="auto" label="结束时间" prop="endDate">
        <u-input
          v-model="form.endDate"
          clearable
          placeholder="请选择结束时间"
          type="select"
          :select-open="endTimeSelectorShow"
          @click="endTimeSelectorShow = true"
        />
      </u-form-item>
      <u-form-item label-width="auto" label="职责描述" prop="responsibilities">
        <u-input v-model="form.responsibilities" clearable placeholder="请输入职责描述" type="textarea" />
      </u-form-item>
      <u-form-item label-width="auto" label="项目介绍" prop="projectContent">
        <u-input v-model="form.projectContent" clearable placeholder="请输入项目介绍" type="textarea" />
      </u-form-item>
      <u-form-item label-width="auto" label="项目链接" prop="projectLink">
        <u-input v-model="form.projectLink" clearable placeholder="请输入项目链接" />
      </u-form-item>
    </u-form>
    <u-picker mode="time" v-model="startTimeSelectorShow" @confirm="handleStartTimeSelectorConfirm"></u-picker>
    <u-picker mode="time" v-model="endTimeSelectorShow" @confirm="handleEndTimeSelectorConfirm"></u-picker>
    <u-button class="cr-button-fixed-bottom" type="primary" @click="save">保存</u-button>
  </view>
</template>

<style lang="scss"></style>
