<script setup lang="ts">
  import useResumeStore from '@/stores/resume'
  import { computed, ref } from 'vue'

  const resumeStore = useResumeStore()
  const studentInfo = computed(() => resumeStore.state.value?.studentInfo)
  const show = ref(false)
  const form = ref({ rejectionReason: '', rejectionDescription: '' })
  const rejectionReasonSelectorShow = ref(false)
  const rejectionReasonOptions = [
    { label: '不符合资格要求', value: '不符合资格要求' },
    { label: '缺乏相关经验', value: '缺乏相关经验' },
    { label: '与公司文化不匹配', value: '与公司文化不匹配' },
    { label: '技能不符合需求', value: '技能不符合需求' },
    { label: '简历格式/质量问题', value: '简历格式/质量问题' },
    { label: '岗位已满', value: '岗位已满' },
    { label: '缺乏动机/兴趣', value: '缺乏动机/兴趣' },
    { label: '薪资要求不匹配', value: '薪资要求不匹配' },
    { label: '优秀候选人竞争激烈', value: '优秀候选人竞争激烈' },
    { label: '不完整的申请', value: '不完整的申请' }
  ]

  function rejectionReasonSelectorShowConfirm(result: any) {
    form.value.rejectionReason = result[0].value
  }
  function save() {
    console.log(form.value, 'form.value')
  }
</script>
<template>
  <view class="com-refused-resumes" v-if="studentInfo">
    <view class="p-30 mb-20 bg-white u-flex">
      <view class="cr-flex-1 mr-20">
        <view class="font-title">{{ studentInfo.realName }}</view>
        <view class="font-desc mt-10"
          >{{ studentInfo.birthdate }} | {{ studentInfo.educationLevel }} | {{ studentInfo.majorName }}</view
        >
        <view class="icon-list mt-10">
          <cr-icon-light class="mr-20" name="email" :label="studentInfo.email" />
          <cr-icon-light name="cr-icon-phone" :label="studentInfo.mobile" />
        </view>
      </view>
      <u-avatar :size="88" show-sex :sex-icon="studentInfo.sex" :src="studentInfo.avatarUrl"></u-avatar>
    </view>
    <view class="p-30 bg-white">
      <u-form :model="form" ref="formRef">
        <u-form-item label-width="auto" label="不合适原因" prop="rejectionReason">
          <u-input
            v-model="form.rejectionReason"
            clearable
            placeholder="请选择不合适原因"
            type="select"
            :select-open="rejectionReasonSelectorShow"
            @click="rejectionReasonSelectorShow = true"
          />
        </u-form-item>
        <u-form-item label-width="auto" label="不合适说明" prop="rejectionDescription" label-position="top">
          <u-input
            v-model="form.rejectionDescription"
            clearable
            placeholder="请输入简历不合适说明"
            type="textarea"
            :height="300"
          />
        </u-form-item>
      </u-form>
    </view>
    <u-button class="cr-button-fixed-bottom" type="primary" @click="save">保存</u-button>
    <u-select
      v-model="rejectionReasonSelectorShow"
      :list="rejectionReasonOptions"
      @confirm="rejectionReasonSelectorShowConfirm"
    />
  </view>
</template>

<style lang="scss">
  .inner-action-item {
    @include between-center();
    .select-icon {
      transition: transform 0.4s;

      &--reverse {
        transform: rotate(-180deg);
      }
    }
  }
</style>
<style>
  page {
    background-color: #f3f8ff;
  }
</style>