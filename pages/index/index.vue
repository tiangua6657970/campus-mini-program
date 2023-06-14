<script lang="ts" setup>
  import { onReachBottom, onPullDownRefresh } from '@dcloudio/uni-app'
  import { useSearchJobList } from '@/service'
  import { navigateToJobDetails } from "@/common/navigates";

  const { query, loadResult, loadMore, loadStatus, refresh, noData } = useSearchJobList()
  onReachBottom(loadMore)
  onPullDownRefresh(async () => {
    await refresh()
    uni.stopPullDownRefresh()
  })
  refresh()

</script>

<template>
  <view class="index">
    <cr-job-list :list="loadResult" @item-click="navigateToJobDetails"/>
    <u-loadmore :status="loadStatus" v-if="loadResult.length" @loadmore="loadMore"/>
    <cr-empty v-if="noData" />
  </view>
</template>

<style>
  .index {
  }
</style>