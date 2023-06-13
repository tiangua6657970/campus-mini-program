<script lang="ts" setup>
import {
  onPageScroll,
  onPullDownRefresh,
  onReachBottom,
  onShareAppMessage,
  onShareTimeline
} from '@dcloudio/uni-app'
  import { useJobList } from '@/service'

  const { jobList, refresh } = useJobList()
  refresh()
</script>

<template>
  <view class="index">
    <cr-job-list :list="jobList"/>
  </view>
</template>

<style>
  .index {

  }
</style>