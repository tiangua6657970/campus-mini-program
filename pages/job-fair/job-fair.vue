<script setup lang="ts">
  import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
  import { computed, ref, watchEffect } from 'vue'
  import { useEmployerTalkList, useSearchJobFairList } from '@/service/job-fair'
  import { navigateToCompanyPresentationDetails, navigateToJobFairDetails } from '@/common/navigates'

  const currenIndex = ref(0)
  const tabs = [{ name: '双选会' }, { name: '宣讲会' }]
  const {
    loadResult: jobFairList,
    loadStatus: loadJobFairStatus,
    loadMore: loadMoreJobFair,
    refresh: refreshJobFair,
    noData: JobFairNoData
  } = useSearchJobFairList()
  const {
    loadResult: employerTalkList,
    loadStatus: loadEmployerTalkStatus,
    loadMore: loadMoreEmployerTalk,
    refresh: refreshEmployerTalk,
    noData: employerTalkNoData
  } = useEmployerTalkList()

  const useEffect = computed(() => {
    if (currenIndex.value === 0)
      return {
        loadMore: loadMoreJobFair,
        refresh: refreshJobFair
      }
    else
      return {
        loadMore: loadMoreEmployerTalk,
        refresh: refreshEmployerTalk
      }
  })

  function handelTabChange(index: number) {}

  onReachBottom(() => useEffect.value.loadMore())
  onPullDownRefresh(async () => {
    await useEffect.value.refresh()
    uni.stopPullDownRefresh()
  })
  watchEffect(() => {
    useEffect.value.refresh()
  })
</script>
<template>
  <view class="job-fair">
    <u-tabs class="mb-20" :list="tabs" :is-scroll="false" v-model="currenIndex" @change="handelTabChange"></u-tabs>
    <template v-if="currenIndex === 0">
      <cr-job-fair-list :list="jobFairList" v-if="currenIndex === 0" @item-click="navigateToJobFairDetails" />
      <u-loadmore :status="loadJobFairStatus" v-if="jobFairList.length" @loadmore="loadMoreJobFair" />
      <cr-empty v-if="JobFairNoData" :top="525" />
    </template>
    <template v-if="currenIndex === 1">
      <cr-employer-talk-list
        :list="employerTalkList"
        v-if="currenIndex === 1"
        @item-click="navigateToCompanyPresentationDetails"
      />
      <u-loadmore
        :status="loadEmployerTalkStatus"
        v-if="employerTalkList.length"
        @loadmore="loadMoreEmployerTalk"
      />
      <cr-empty v-if="employerTalkNoData" :top="525" />
    </template>
  </view>
</template>

<style lang="scss"></style>
<style>
  page {
    background-color: #f3f8ff;
  }
</style>
