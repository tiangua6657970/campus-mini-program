<script setup lang="ts">
  import { formRules, placeholders } from '@/common/hooks/use-form'
  import { onReady } from '@dcloudio/uni-app'
  import { reactive, ref } from 'vue'

  interface Props {
    navTitle: '学生验证' | '企业验证'
  }

  const props = defineProps<Props>()
  const formRef = ref()
  const form = reactive({
    name: '',
    id: '',
    studentCode: '',
    legalPersonName: '',
    companyFullName: '',
    position: '',
    industryId: '',
    placeholderIndustry: '',
    staffSize: '',
    content: ''
  })
  const staffSizes = [
    {
      value: '0-20人',
      label: '0-20人'
    },
    {
      value: '100-499人',
      label: '100-499人'
    },
    {
      value: '500-999人',
      label: '500-999人'
    },
    {
      value: '1000-9999人',
      label: '1000-9999人'
    },
    {
      value: '10000人以上1',
      label: '10000人以上'
    }
  ]
  const sizeSelectorShow = ref(false)
  onReady(() => {
    const { name, id, studentCode, placeholderIndustry } = formRules
    formRef.value.setRules({
      name,
      id,
      studentCode,
      legalPersonName: [
        {
          required: true,
          message: '请输入法人姓名',
          trigger: ['blur']
        }
      ],
      companyFullName: [
        {
          required: true,
          message: '请输入企业名称',
          trigger: ['blur']
        }
      ],
      position: [
        {
          required: true,
          message: '请输入职务信息',
          trigger: ['blur']
        }
      ],
      placeholderIndustry,
      staffSize: [
        {
          required: true,
          message: '请选择企业规模',
          trigger: ['blur']
        }
      ],
      content: [
        {
          required: true,
          message: '请输入企业简介',
          trigger: ['blur']
        }
      ]
    })
  })

  function handleSizeSelectionConfirm(result: any) {
    form.staffSize = result[0].value
  }

  function save() {
    formRef.value.validate(async (valid: boolean) => {
      if (valid) {
      }
    })
  }
</script>
<template>
  <view class="verification">
    <u-navbar
      title-color="#fff"
      back-icon-color="#fff"
      :border-bottom="false"
      :background="{ background: `transparent` }"
    ></u-navbar>
    <view class="root">
      <u-image src="@/static/images/auth-bg.png" width="100%" height="100%" />
      <view class="content-wrapper">
        <view class="content">
          <view class="content-header u-margin-bottom-60">
            <view class="font-title">{{ navTitle }}</view>
            <view class="font-base mt-10">基本信息需填写准确</view>
          </view>
          <u-form :model="form" ref="formRef">
            <template v-if="navTitle === '学生验证'">
              <u-form-item label-width="auto" label="姓名" prop="name">
                <u-input v-model="form.studentCode" clearable :placeholder="placeholders.name" />
              </u-form-item>
              <u-form-item label-width="auto" label="身份证号" prop="id">
                <u-input v-model="form.id" clearable :placeholder="placeholders.id" />
              </u-form-item>
              <u-form-item label-width="auto" label="学号" prop="studentCode">
                <u-input v-model="form.studentCode" clearable :placeholder="placeholders.studentCode" />
              </u-form-item>
            </template>
            <template v-if="navTitle === '企业验证'">
              <u-form-item label-width="auto" label="法人姓名" prop="legalPersonName">
                <u-input v-model="form.legalPersonName" clearable placeholder="请输入法人姓名" />
              </u-form-item>
              <u-form-item label-width="auto" label="企业名称" prop="companyFullName">
                <u-input v-model="form.companyFullName" clearable placeholder="请输入企业名称" />
              </u-form-item>
              <u-form-item label-width="auto" label="职务信息" prop="position">
                <u-input v-model="form.position" clearable placeholder="请输入职务信息" />
              </u-form-item>
              <u-form-item label-width="auto" label="企业行业" prop="placeholderIndustry">
                <u-input
                  v-model="form.placeholderIndustry"
                  clearable
                  placeholder="请选择企业行业"
                  type="select"
                  :select-open="sizeSelectorShow"
                  @click="sizeSelectorShow = true"
                />
              </u-form-item>
              <u-form-item label-width="auto" label="企业规模" prop="staffSize">
                <u-input
                  v-model="form.staffSize"
                  clearable
                  placeholder="请选择企业规模"
                  type="select"
                  :select-open="sizeSelectorShow"
                  @click="sizeSelectorShow = true"
                />
              </u-form-item>
              <u-form-item label-width="auto" :border-bottom="false" label="企业简介" prop="content">
                <u-input v-model="form.content" clearable placeholder="请输入企业简介" type="textarea" />
              </u-form-item>
            </template>
            <u-button class="u-margin-top-50" type="primary" @click="save">完成</u-button>
          </u-form>
        </view>
      </view>
    </view>
    <u-select v-model="sizeSelectorShow" :list="staffSizes" @confirm="handleSizeSelectionConfirm"></u-select>
  </view>
</template>

<style lang="scss">
  .root {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    .content-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
      padding: 30rpx;

      .content{
        background-color: #fff;
        border-radius: 15rpx;
        padding: 30rpx;
      }
      .content-header {
      }
    }
  }
</style>
