<script setup lang="ts">
  import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
  import { ref, watchEffect } from 'vue'
  import { navigateToJobDetails } from '@/common/navigates'
  import { useSearchJobList } from '@/service'

  const tabs = [
    { name: '发布中职位' },
    { name: '未发布职位' },
    { name: '已停用职位' },
    { name: '审核中职位' },
    { name: '审核未通过职位' }
  ]
  const currenIndex = ref(0)
  const {
    query,
    loadResult,
    loadMore,
    loadStatus,
    refresh: refreshJobList,
    noData,
    setParamsAndRefresh
  } = useSearchJobList()
  watchEffect(() => {
    setParamsAndRefresh('type', currenIndex.value)
  })
  onPullDownRefresh(async () => {
    await setParamsAndRefresh('type', currenIndex.value)
    uni.stopPullDownRefresh()
  })
  onReachBottom(() => loadMore())
</script>
<template>
  <view class="com-job-management">
    <u-tabs :list="tabs" :is-scroll="true" v-model="currenIndex"></u-tabs>
    <cr-job-list class="mt-20" :list="loadResult" @item-click="navigateToJobDetails" />
    <u-loadmore :status="loadStatus" v-if="loadResult.length" @loadmore="loadMore" />
    <cr-empty v-if="noData" :top="525" />
  </view>
</template>

<style lang="scss"></style>
<style>
  page {
    background-color: #f3f8ff;
  }
</style>