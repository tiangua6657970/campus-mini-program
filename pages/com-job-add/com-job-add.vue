<script setup lang="ts">
  import { getRuleByMessage } from '@/common/hooks/use-form'
  import { ref } from 'vue'
  import { onReady } from '@dcloudio/uni-app'
  import { generateSalaryOptions } from '@/common/utils'
  import { useJobDetails } from "@/service";

  interface Props {
    id?: string
  }
  const props = defineProps<Props>()
  const formRef = ref()
  const form = ref({
    positionName: '',
    salaryRange: '',
    city: '',
    experienceYears: '',
    educationLevel: '',
    jobResponsibility: '',
    jobRequirement: ''
  })
  const salaryRangeOptions = generateSalaryOptions()
  const salaryRangeSelectorShow = ref(false)
  const citySelectorShow = ref(false)
  const citySelectorParams = {
    province: true,
    city: true,
    area: false
  }
  const experienceYearsSelectorShow = ref(false)
  const experienceYearsOptions = [
    { label: '无', value: '无' },
    { label: '1年', value: '一年' },
    { label: '2年', value: '2年' },
    { label: '3年', value: '3年' },
    { label: '5年以上', value: '5年以上' },
    { label: '10年以上', value: '10年以上' }
  ]
  onReady(() => {
    formRef.value.setRules({
      positionName: getRuleByMessage('请输入岗位名称'),
      salaryRange: getRuleByMessage('请选择薪资范围'),
      city: getRuleByMessage('请输入城市'),
      experienceYears: getRuleByMessage('请选择工作经验'),
      educationLevel: getRuleByMessage('请选择学历'),
      jobResponsibility: getRuleByMessage('请选择岗位职责'),
      jobRequirement: getRuleByMessage('请选择任职要求')
    })
  })
  if (props.id) {
    uni.setNavigationBarTitle({title: '职位编辑'})
    const { jobDetails, refresh } = useJobDetails(props)
    refresh(job => form.value = job)
  }
  function handleSalarySelectorConfirm(result: any) {
    const [{ value: value1 }, { value: value2 }] = result
    form.value.salaryRange = `${value1}-${value2}`
  }
  function handleAddressSelectionConfirm(result: any) {
    const { province, city } = result
    form.value.city = `${province.name}-${city.name}`
  }
  function experienceYearsSelectorConfirm(result: any) {
    form.value.experienceYears = result[0].value
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
  <view class="com-job-add p-30">
    <u-form class="bg-white" :model="form" ref="formRef">
      <u-form-item label-width="auto" label="岗位名称" prop="positionName">
        <u-input v-model="form.positionName" clearable placeholder="请输入岗位名称" />
      </u-form-item>
      <u-form-item label-width="auto" label="薪资范围" prop="salaryRange">
        <u-input
          v-model="form.salaryRange"
          clearable
          placeholder="请选择薪资范围"
          type="select"
          :select-open="salaryRangeSelectorShow"
          @click="salaryRangeSelectorShow = true"
        />
      </u-form-item>
      <u-form-item label-width="auto" label="城市" prop="city">
        <u-input
          v-model="form.city"
          clearable
          placeholder="请选择城市"
          type="select"
          :select-open="citySelectorShow"
          @click="citySelectorShow = true"
        />
      </u-form-item>
      <u-form-item label-width="auto" label="工作经验" prop="experienceYears">
        <u-input
          v-model="form.experienceYears"
          clearable
          placeholder="请选择工作经验"
          type="select"
          :select-open="experienceYearsSelectorShow"
          @click="experienceYearsSelectorShow = true"
        />
      </u-form-item>
      <u-form-item label-width="auto" label="学历要求" prop="educationLevel">
        <u-input v-model="form.educationLevel" clearable placeholder="请选择学历" />
      </u-form-item>
      <u-form-item label-width="auto" label="岗位职责" prop="jobResponsibility">
        <u-input v-model="form.jobResponsibility" clearable placeholder="请选择岗位职责" type="textarea" />
      </u-form-item>
      <u-form-item label-width="auto" label="任职要求" prop="jobRequirement">
        <u-input v-model="form.jobRequirement" clearable placeholder="请选择任职要求" type="textarea" />
      </u-form-item>
    </u-form>
    <u-button class="cr-button-fixed-bottom" type="primary" @click="save">保存</u-button>
    <u-select
      v-model="salaryRangeSelectorShow"
      :list="salaryRangeOptions"
      mode="mutil-column-auto"
      @confirm="handleSalarySelectorConfirm"
    />
    <u-select
      v-model="experienceYearsSelectorShow"
      :list="experienceYearsOptions"
      mode="mutil-column-auto"
      @confirm="experienceYearsSelectorConfirm"
    />
    <u-picker
      v-model="citySelectorShow"
      mode="region"
      :params="citySelectorParams"
      @confirm="handleAddressSelectionConfirm"
    ></u-picker>
  </view>
</template>

<style lang="scss"></style>
<style>
  /* page {
    background-color: #f3f8ff;
  }*/
</style>
