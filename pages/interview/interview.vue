<script setup lang="ts">
  import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
  import { useSearchInterviewList } from '@/service/interview'
  import { ref, watchEffect } from 'vue'
  import { navigateToInterviewDetails } from '@/common/navigates'

  const { loadResult, loadStatus, loadMore, setParamsAndRefresh, refresh, noData } = useSearchInterviewList()

  const currentIndex = ref(0)
  const statusMap = {
    0: '待面试',
    1: '已面试',
    2: '已取消',
    3: '已超时'
  }
  const tabs = Object.values(statusMap).map(item => ({ name: item }))
  watchEffect(() => {
    setParamsAndRefresh('type', currentIndex.value)
  })
  onReachBottom(() => loadMore())
  onPullDownRefresh(async () => {
    await setParamsAndRefresh('type', currentIndex.value)
    uni.stopPullDownRefresh()
  })
</script>
<template>
  <view class="interview">
    <u-tabs class="mb-20" :list="tabs" :is-scroll="false" v-model="currentIndex"></u-tabs>
    <template v-for="item in loadResult" :key="item.id">
      <view class="p-30 u-border-bottom item-header bg-white" @click="navigateToInterviewDetails(item)">
        <view class="font-base">{{ item.agreeTime }}</view>
        <u-tag :text="statusMap[item.status]" mode="dark" v-if="item.status === '0'" />
        <u-tag :text="statusMap[item.status]" type="success" mode="dark" v-if="item.status === '1'" />
        <u-tag :text="statusMap[item.status]" type="info" mode="dark" v-if="item.status === '2'" />
        <u-tag :text="statusMap[item.status]" type="warning" mode="dark" v-if="item.status === '3'" />
      </view>
      <cr-job-list-item :data="item.job" @click="navigateToInterviewDetails(item)" />
    </template>
    <u-loadmore :status="loadStatus" v-if="loadResult.length" @loadmore="loadMore" />
    <cr-empty v-if="noData" />
  </view>
</template>

<style lang="scss">
  .item-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
<style>
  page {
    background-color: #f3f8ff;
  }
</style>
