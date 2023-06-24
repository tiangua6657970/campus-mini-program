<script setup lang="ts">
  import { ref } from 'vue'
  import { toast } from '@/common/utils'
  import { useResumeStudentInfo } from '@/service/resume'

  const form = ref({ introduce: '' })
  const { refresh } = useResumeStudentInfo()
  refresh(student => form.value = student)
  function save() {
    if (!form.value.introduce) {
      toast('请输入内容')
      return
    }
  }
</script>
<template>
  <view class="resume-self-rating p-30">
    <u-field
      class="u-field"
      v-model="form.introduce"
      type="textarea"
      label-width="0"
      placeholder="请填写自我评价，让企业更了解你"
    >
    </u-field>
    <u-button class="cr-button-fixed-bottom" type="primary" @click="save">保存</u-button>
  </view>
</template>

<style lang="scss">
  .u-field {
    padding: 0;
  }
</style>