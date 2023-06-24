<script setup lang="ts">
  import { ref } from 'vue'
  import { onReady } from '@dcloudio/uni-app'
  import { getRuleByMessage } from '@/common/hooks/use-form'
  import industryList from '@/common/Industry-list'
  import { uesWorkExperienceInfo } from '@/service/resume'

  interface Props {
    type?: 'add' | 'edit'
  }

  const props = withDefaults(defineProps<Props>(), { type: 'add' })
  const formRef = ref()
  const form = ref({
    companyName: '',
    industryName: '',
    startDate: '',
    endDate: '',
    positionName: '',
    workContent: '',
    workPerformance: ''
  })
  const industrySelectorShow = ref(false)
  const startTimeSelectorShow = ref(false)
  const endTimeSelectorShow = ref(false)
  const {  refresh } = uesWorkExperienceInfo()
  if (props.type === 'edit') {
    refresh(workExperienceInfo => form.value = workExperienceInfo)
  }
  onReady(() => {
    formRef.value.setRules({
      companyName: getRuleByMessage('请输入公司名称'),
      industryName: getRuleByMessage('请选择行业'),
      startDate: getRuleByMessage('请选择入职时间'),
      endDate: getRuleByMessage('请选择离职时间'),
      positionName: getRuleByMessage('请选择职位'),
      workContent: getRuleByMessage('请选择工作内容'),
      workPerformance: getRuleByMessage('请选择工作业绩')
    })
  })
  function handleIndustrySelectorConfirm(result: any) {
    const [{ value: value1 }, { value: value2 }] = result
    form.value.industryName = `${value1}-${value2}`
  }

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
  <view class="resume-work-experience-add p-30">
    <u-form :model="form" ref="formRef">
      <u-form-item label-width="auto" label="公司名称" prop="companyName">
        <u-input v-model="form.companyName" clearable placeholder="请输入公司名称" />
      </u-form-item>
      <u-form-item label-width="auto" label="行业" prop="industryName">
        <u-input
          v-model="form.industryName"
          clearable
          placeholder="请选择行业"
          type="select"
          :select-open="industrySelectorShow"
          @click="industrySelectorShow = true"
        />
      </u-form-item>
      <u-form-item label-width="auto" label="入职时间" prop="startDate">
        <u-input
          v-model="form.startDate"
          clearable
          placeholder="请选择入职时间"
          type="select"
          :select-open="startTimeSelectorShow"
          @click="startTimeSelectorShow = true"
        />
      </u-form-item>
      <u-form-item label-width="auto" label="离职时间" prop="endDate">
        <u-input
          v-model="form.endDate"
          clearable
          placeholder="请选择离职时间"
          type="select"
          :select-open="endTimeSelectorShow"
          @click="endTimeSelectorShow = true"
        />
      </u-form-item>
      <u-form-item label-width="auto" label="职位" prop="positionName">
        <u-input v-model="form.positionName" clearable placeholder="请选择职位" />
      </u-form-item>
      <u-form-item label-width="auto" label="工作内容" prop="workContent">
        <u-input v-model="form.workContent" clearable placeholder="请选择工作内容" type="textarea" />
      </u-form-item>
      <u-form-item label-width="auto" label="工作业绩" prop="workPerformance">
        <u-input v-model="form.workPerformance" clearable placeholder="请选择工作业绩" type="textarea" />
      </u-form-item>
    </u-form>
    <u-select
      v-model="industrySelectorShow"
      :list="industryList"
      value-name="text"
      label-name="text"
      mode="mutil-column-auto"
      @confirm="handleIndustrySelectorConfirm"
    />
    <u-picker mode="time" v-model="startTimeSelectorShow" @confirm="handleStartTimeSelectorConfirm"></u-picker>
    <u-picker mode="time" v-model="endTimeSelectorShow" @confirm="handleEndTimeSelectorConfirm"></u-picker>
    <u-button class="cr-button-fixed-bottom" type="primary" @click="save">保存</u-button>
  </view>
</template>

<style lang="scss"></style>