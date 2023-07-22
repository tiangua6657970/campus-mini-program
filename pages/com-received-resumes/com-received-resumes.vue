<script setup lang="ts">
  import { navigateToResumeDetails } from '@/common/navigates'
  import { useSearchResumeList } from '@/service/resume'

  interface Props {
    navBarTitle: string
  }
  const props = defineProps<Props>()
  uni.setNavigationBarTitle({ title: props.navBarTitle })
  /**
   * 这里要根据 navBarTitle 来调用 useSearchResumeList
   */
  const { loadResult, loadMore, loadStatus, refresh, noData } = useSearchResumeList()
  refresh()
</script>
<template>
  <view class="com-received-resumes">
    <cr-resume-list :list="loadResult" @item-click="navigateToResumeDetails" />
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
