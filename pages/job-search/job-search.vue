<script setup lang="ts">
  import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
  import { useSearchJobList } from '@/service'
  import { navigateToJobDetails } from '@/common/navigates'
  import { reactive, ref } from 'vue'
  import { historyStore } from '@/stores/history'

  const addressSelectorShow = ref(false)
  const showFilterItems = reactive<{ [props: string]: string }>({})

  const { loadResult, loadStatus, loadMore, noData, query, refresh, setParamsAndRefresh, setQueryCallback } =
    useSearchJobList()

  function handleAddressSelectionConfirm(result: any) {
    const { province, city, area } = result
    const value = `${province.name}-${city.name}-${area.name}`
    setParamsAndRefresh('address', value)
    showFilterItems.region = value
  }

  setQueryCallback(query => historyStore.add(query))
  onPullDownRefresh(async () => {
    await refresh()
    uni.stopPullDownRefresh()
  })
  onReachBottom(() => loadMore())
  refresh()
</script>

<template>
  <view class="job-search">
    <view class="header p-30 mb-20 bg-white">
      <u-icon
        class="mr-20"
        name="arrow-down"
        size="30"
        label="南宁"
        label-pos="left"
        @click="addressSelectorShow = true"
      ></u-icon>
      <u-search placeholder="职位、公司" v-model="query" @search="refresh" @custom="refresh"></u-search>
    </view>
    <template v-if="!query">
      <view class="block p-30 mb-20 bg-white" v-if="historyStore.list.length">
        <view class="block-header mb-20">
          <view class="font-title">搜索历史</view>
          <u-icon name="cr-icon-delete" label="清除搜索历史" size="30" @click="historyStore.clear()" />
        </view>
        <cr-tag-list :list="historyStore.list" @item-click="item => (query = item)" />
      </view>
      <view class="block p-30 mb-20 bg-white">
        <view class="block-header mb-20">
          <view class="font-title">为你推荐</view>
        </view>
        <cr-tag-list :list="historyStore.list" @item-click="item => (query = item)" />
      </view>
    </template>
    <view class="p-30 bg-white">
      <cr-job-list :list="loadResult" @item-click="navigateToJobDetails" v-if="loadResult.length" />
      <u-loadmore :status="loadStatus" v-if="loadResult.length" @loadmore="loadMore" />
      <cr-empty v-if="noData" />
    </view>
    <u-picker v-model="addressSelectorShow" mode="region" @confirm="handleAddressSelectionConfirm"></u-picker>
  </view>
</template>

<style lang="scss">
  .job-search {
  }
  .header {
    display: flex;
    align-items: center;
  }
  .block-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
<style>
  page {
    background-color: #f3f8ff;
  }
</style>
