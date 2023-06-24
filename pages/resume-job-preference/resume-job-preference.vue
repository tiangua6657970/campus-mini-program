<script setup lang="ts">
  import { ref } from 'vue'
  import { onReady } from '@dcloudio/uni-app'
  import { getRuleByMessage } from '@/common/hooks/use-form'
  import industryList from '@/common/Industry-list'
  import { useResumeExpectedJobInfo } from '@/service/resume'

  interface Props {
    type?: 'add' | 'edit'
  }

  const props = withDefaults(defineProps<Props>(), { type: 'add' })
  const workTypeSelectorShow = ref(false)
  const expectedCitySelectorShow = ref(false)
  const expectedSalarySelectorShow = ref(false)
  const industrySelectorShow = ref(false)
  const arrivalDateSelectorShow = ref(false)
  const formRef = ref()
  const form = ref({
    workType: '',
    expectedCity: '',
    expectedPosition: '',
    expectedSalary: '',
    expectedIndustryName: '',
    arrivalDate: ''
  })
  const addressSelectorParams = {
    province: true,
    city: true,
    area: false
  }
  const workTypeList = [
    { label: '全职', value: '全职' },
    { label: '兼职', value: '兼职' }
  ]
  const expectedSalaryList = generateSalaryList()
  const arrivalDateList = [
    { label: '离职-随时到岗', value: '离职-随时到岗' },
    { label: '在职-月内到岗', value: '在职-月内到岗' },
    { label: '在职-考虑机会', value: '在职-考虑机会' },
    { label: '在职-暂不考虑', value: '在职-暂不考虑' }
  ]

  const { refresh } = useResumeExpectedJobInfo()
  if (props.type === 'edit') {
    refresh(expectedJob => (form.value = expectedJob))
  }
  onReady(() => {
    formRef.value.setRules({
      workType: getRuleByMessage('请选择工作类型'),
      expectedCity: getRuleByMessage('请选择期望城市'),
      expectedPosition: getRuleByMessage('请输入期望职位'),
      expectedSalary: getRuleByMessage('请选择薪资范围'),
      expectedIndustryName: getRuleByMessage('请选择期望行业'),
      arrivalDate: getRuleByMessage('请选择到岗时间')
    })
  })

  function generateSalaryList(count: number = 30) {
    count += 1
    const result = []
    for (let i = 1; i < count; i++) {
      const label = i + 'k'
      const value = i + 'k'
      const children: any[] = []
      for (let j = i + 1; j < count; j++) {
        const label = j + 'k'
        const value = j + 'k'
        children.push({ label, value })
      }
      result.push({ label, value, children })
    }
    result[result.length - 1].children = [{ label: '以上', value: '以上' }]
    return result
  }

  function handleWorkTypeSelectorConfirm(result: any) {
    form.value.workType = result[0].value
  }

  function handleAddressSelectionConfirm(result: any) {
    const { province, city } = result
    form.value.expectedCity = `${province.name}-${city.name}`
  }

  function handleSalarySelectorConfirm(result: any) {
    const [{ value: value1 }, { value: value2 }] = result
    form.value.expectedSalary = `${value1}-${value2}`
  }

  function handleIndustrySelectorConfirm(result: any) {
    const [{ value: value1 }, { value: value2 }] = result
    form.value.expectedIndustryName = `${value1}-${value2}`
  }

  function handleTimeSelectorConfirm(result: any) {
    form.value.arrivalDate = result[0].value
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
  <view class="resume-job-preference-add p-30">
    <u-form :model="form" ref="formRef">
      <u-form-item label-width="auto" label="工作类型" prop="workType">
        <u-input
          v-model="form.workType"
          clearable
          placeholder="请选择工作类型"
          type="select"
          :select-open="workTypeSelectorShow"
          @click="workTypeSelectorShow = true"
        />
      </u-form-item>
      <u-form-item label-width="auto" label="期望城市" prop="expectedCity">
        <u-input
          v-model="form.expectedCity"
          clearable
          placeholder="请选择期望城市"
          type="select"
          :select-open="expectedCitySelectorShow"
          @click="expectedCitySelectorShow = true"
        />
      </u-form-item>
      <u-form-item label-width="auto" label="期望岗位" prop="expectedPosition">
        <u-input v-model="form.expectedPosition" clearable placeholder="请输入期望岗位" />
      </u-form-item>
      <u-form-item label-width="auto" label="期望薪资" prop="expectedSalary">
        <u-input
          v-model="form.expectedSalary"
          clearable
          placeholder="请选择期望薪资"
          type="select"
          :select-open="expectedSalarySelectorShow"
          @click="expectedSalarySelectorShow = true"
        />
      </u-form-item>
      <u-form-item label-width="auto" label="期望行业" prop="expectedIndustryName">
        <u-input
          v-model="form.expectedIndustryName"
          clearable
          placeholder="请选择期望行业"
          type="select"
          :select-open="industrySelectorShow"
          @click="industrySelectorShow = true"
        />
      </u-form-item>
      <u-form-item label-width="auto" label="到岗时间" prop="arrivalDate">
        <u-input
          v-model="form.arrivalDate"
          clearable
          placeholder="请选择到岗时间"
          type="select"
          :select-open="arrivalDateSelectorShow"
          @click="arrivalDateSelectorShow = true"
        />
      </u-form-item>
    </u-form>
    <u-select v-model="workTypeSelectorShow" :list="workTypeList" @confirm="handleWorkTypeSelectorConfirm" />
    <u-picker
      v-model="expectedCitySelectorShow"
      mode="region"
      :params="addressSelectorParams"
      @confirm="handleAddressSelectionConfirm"
    ></u-picker>
    <u-select
      v-model="expectedSalarySelectorShow"
      :list="expectedSalaryList"
      mode="mutil-column-auto"
      @confirm="handleSalarySelectorConfirm"
    />
    <u-select
      v-model="industrySelectorShow"
      :list="industryList"
      value-name="text"
      label-name="text"
      mode="mutil-column-auto"
      @confirm="handleIndustrySelectorConfirm"
    />
    <u-select v-model="arrivalDateSelectorShow" :list="arrivalDateList" @confirm="handleTimeSelectorConfirm" />
    <u-button class="cr-button-fixed-bottom" type="primary" @click="save">保存</u-button>
  </view>
</template>

<style lang="scss"></style>