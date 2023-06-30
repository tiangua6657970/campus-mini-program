<script setup lang="ts">
  import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
  import { useSearchJobList } from '@/service'
  import { navigateToJobDetails, navigateToResumeDetails } from '@/common/navigates'
  import { reactive, ref } from 'vue'
  import { historyStore } from '@/stores/history'
  import { useSearchResumeList } from '@/service/resume'
  import { useUserinfoStore } from '@/stores/user-center'

  const addressSelectorShow = ref(false)
  const showFilterItems = reactive<{ [props: string]: string }>({})
  const searchJobEffect = useSearchJobList()
  const searchResumeEffect = useSearchResumeList()
  const userinfo = useUserinfoStore.data
  const effect = userinfo.type === 'student' ? searchJobEffect : searchResumeEffect

  function handleAddressSelectionConfirm(result: any) {
    const { province, city, area } = result
    const value = `${province.name}-${city.name}-${area.name}`
    effect.setParamsAndRefresh('address', value)
    showFilterItems.region = value
  }

  effect.setQueryCallback(query => historyStore.add(query))
  onPullDownRefresh(async () => {
    await effect.refresh()
    uni.stopPullDownRefresh()
  })
  onReachBottom(() => effect.loadMore())
  effect.refresh()
  uni.setNavigationBarTitle({ title: userinfo.type === 'student' ? '搜索职位' : '搜索简历' })
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
      <u-search
        :placeholder="userinfo.type === 'student' ? '职位、公司' : '简历'"
        v-model="effect.query.value"
        @search="effect.refresh"
        @custom="effect.refresh"
      ></u-search>
    </view>
    <template v-if="!effect.query.value">
      <view class="block p-30 mb-20 bg-white" v-if="historyStore.list.length">
        <view class="block-header mb-20">
          <view class="font-title">搜索历史</view>
          <u-icon name="cr-icon-delete" label="清除搜索历史" size="30" @click="historyStore.clear()" />
        </view>
        <cr-tag-list :list="historyStore.list" @item-click="item => (effect.query.value = item)" />
      </view>
      <view class="block p-30 mb-20 bg-white">
        <view class="block-header mb-20">
          <view class="font-title">为你推荐</view>
        </view>
        <cr-tag-list :list="historyStore.list" @item-click="item => (effect.query.value = item)" />
      </view>
    </template>
    <template v-if="userinfo.type === 'student'">
      <cr-job-list
        :list="searchJobEffect.loadResult.value"
        @item-click="navigateToJobDetails"
        v-if="searchJobEffect.loadResult.value.length"
      />
      <u-loadmore
        :status="searchJobEffect.loadStatus.value"
        v-if="searchJobEffect.loadResult.value.length"
        @loadmore="searchJobEffect.loadMore"
      />
      <cr-empty v-if="searchJobEffect.noData.value" />
    </template>
    <template v-else>
      <cr-resume-list :list="searchResumeEffect.loadResult.value" @item-click="navigateToResumeDetails" />
      <u-loadmore
        :status="searchResumeEffect.loadStatus.value"
        v-if="searchResumeEffect.loadResult.value.length"
        @loadmore="searchResumeEffect.loadMore"
      />
      <cr-empty v-if="searchResumeEffect.noData.value" :top="525" />
    </template>
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
