<script setup lang="ts">
  import { useResumeStudentInfo } from '@/service/resume'
  import { ref } from 'vue'
  import { onReady } from '@dcloudio/uni-app'
  import { formRules, getRuleByMessage } from '@/common/hooks/use-form'

  const { resumeStudentInfo, refresh } = useResumeStudentInfo()
  const uploadRef = ref()
  const sexSelectorShow = ref(false)
  const sexList = [
    {
      value: '男',
      label: '男'
    },
    {
      value: '女',
      label: '女'
    },
    {
      value: '未知',
      label: '未知'
    }
  ]
  const formRef = ref()
  type Form = Pick<
    Student,
    | 'realName'
    | 'mobile'
    | 'email'
    | 'sex'
    | 'nation'
    | 'politicalStatus'
    | 'birthPlaceCity'
    | 'homeAddress'
    | 'studentCode'
    | 'departmentName'
    | 'className'
    | 'collegeAdmissionDate'
    | 'id'
  >
  const form = ref<Form>({
    realName: '',
    mobile: '',
    email: '',
    sex: '',
    nation: '',
    politicalStatus: '',
    birthPlaceCity: '',
    homeAddress: '',
    studentCode: '',
    departmentName: '',
    className: '',
    collegeAdmissionDate: '',
    id: 0
  })

  onReady(() => {
    formRef.value.setRules({
      realName: formRules.name,
      mobile: formRules.phone,
      email: formRules.email,
      sex: getRuleByMessage('请选择性别'),
      nation: getRuleByMessage('请输入民族'),
      politicalStatus: getRuleByMessage('请输入政治面貌'),
      birthPlaceCity: getRuleByMessage('请选择籍贯'),
      homeAddress: getRuleByMessage('请输入家庭地址'),
      departmentName: getRuleByMessage('请输入院系名称'),
      className: getRuleByMessage('请输入班级'),
      collegeAdmissionDate: getRuleByMessage('请输入入学日期')
    })
  })

  function handleSexSelectionConfirm(result: any) {
    const { value } = result[0]
    form.value.sex = value
  }
  function save() {
    formRef.value.validate(async (valid: boolean) => {
      if (valid) {
        console.log(form.value, 'form.value')
      }
    })
  }
  refresh(student => (form.value = student))
</script>
<template>
  <view class="resume-base-edit">
    <view class="avatar-wrapper p-30 bg-white">
      <cr-upload-single-image ref="uploadRef" />
    </view>
    <u-form :model="form" ref="formRef">
      <view class="block p-30 mt-20 bg-white">
        <view class="font-base-light">联系方式</view>
        <u-form-item label-width="auto" label="姓名" prop="realName">
          <u-input v-model="form.realName" clearable placeholder="请输入姓名" />
        </u-form-item>
        <u-form-item label-width="auto" label="手机号" prop="mobile">
          <u-input v-model="form.mobile" clearable placeholder="请输入手机号" />
        </u-form-item>
        <u-form-item label-width="auto" label="邮箱" prop="email">
          <u-input v-model="form.email" clearable placeholder="请输入邮箱" />
        </u-form-item>
      </view>
      <view class="block p-30 mt-20 bg-white">
        <view class="font-base-light">身份信息</view>
        <u-form-item label-width="auto" label="性别" prop="sex">
          <u-input
            v-model="form.sex"
            clearable
            placeholder="请选择性别"
            type="select"
            :select-open="sexSelectorShow"
            @click="sexSelectorShow = true"
          />
        </u-form-item>
        <u-form-item label-width="auto" label="民族" prop="nation">
          <u-input v-model="form.nation" clearable placeholder="请输入民族" />
        </u-form-item>
        <u-form-item label-width="auto" label="政治面貌" prop="politicalStatus">
          <u-input v-model="form.politicalStatus" clearable placeholder="请输入政治面貌" />
        </u-form-item>
        <u-form-item label-width="auto" label="籍贯城市" prop="birthPlaceCity">
          <u-input v-model="form.birthPlaceCity" clearable placeholder="请选择籍贯" />
        </u-form-item>
        <u-form-item label-width="auto" label="家庭地址" prop="homeAddress">
          <u-input v-model="form.homeAddress" clearable placeholder="请输入家庭地址" />
        </u-form-item>
      </view>
      <view class="block p-30 mt-20 bg-white">
        <view class="font-base-light">学籍信息</view>
        <u-form-item label-width="auto" label="学号" prop="studentCode">
          <u-input v-model="form.studentCode" clearable placeholder="请输入学号" disabled />
        </u-form-item>
        <u-form-item label-width="auto" label="院系名称" prop="departmentName">
          <u-input v-model="form.departmentName" clearable placeholder="请输入院系名称" />
        </u-form-item>
        <u-form-item label-width="auto" label="班级" prop="className">
          <u-input v-model="form.className" clearable placeholder="请输入班级" />
        </u-form-item>
        <u-form-item label-width="auto" label="入学日期" prop="collegeAdmissionDate">
          <u-input v-model="form.collegeAdmissionDate" clearable placeholder="请输入入学日期" />
        </u-form-item>
      </view>
    </u-form>
    <view class="p-30"> <u-button type="primary" @click="save">保存</u-button></view>
    <u-select v-model="sexSelectorShow" :list="sexList" @confirm="handleSexSelectionConfirm"></u-select>
  </view>
</template>
<style lang="scss">
  .avatar-wrapper {
    display: flex;
    justify-content: center;
  }
</style>
<style>
  page {
    background-color: #f3f8ff;
  }
</style>