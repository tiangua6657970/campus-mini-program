<script setup lang="ts">
  import { useJobList } from '@/service'
  import { navigateToJobDetails } from '@/common/navigates'

  const { jobList, noData, refresh } = useJobList()
  refresh()
</script>
<template>
  <view class="applied-resume p-30">
    <cr-job-list :list="jobList" @item-click="navigateToJobDetails" />
  </view>
</template>

<style lang="scss"></style>