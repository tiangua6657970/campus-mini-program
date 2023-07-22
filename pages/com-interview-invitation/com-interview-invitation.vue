<script setup lang="ts">
  import useResumeStore from '@/stores/resume'
  import { computed } from 'vue/dist/vue'

  const resumeStore = useResumeStore()
  const studentInfo = computed(() => resumeStore.state.value?.studentInfo)
</script>
<template>
  <view class="com-interview-invitation" v-if="studentInfo">
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
  </view>
</template>

<style lang="scss"></style>
