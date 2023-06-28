<script setup lang="ts">
  import { useEmployerTalkDetails } from '@/service/job-fair'
  import { computed, ref } from 'vue'
  import { useJobList } from '@/service'
  import { navigateToCompanyDetails } from '@/common/navigates'

  const currenIndex = ref(0)

  const { employerTalkDetails, refresh } = useEmployerTalkDetails()
  const { jobList, noData, refresh: refreshJobList } = useJobList()
  const enterprise = computed(() => employerTalkDetails.value?.enterprise!)
  const tabs = [{ name: '活动详情' }, { name: '职位招聘' }]

  function handleTabChange(index: number) {
    refreshJobList({ ids: employerTalkDetails.value!.jobIds })
  }
  refresh()
</script>
<template>
  <view class="employer-talk-details" v-if="employerTalkDetails">
    <view class="block p-30 bg-white">
      <view class="font-title">{{ employerTalkDetails.enterprise.companyFullName }}</view>
      <view class="icon-list mt-20">
        <cr-icon-light class="mr-20" name="cr-icon-datetime" :label="employerTalkDetails.startTime" />
        <cr-icon-light class="mr-20" name="cr-icon-company" :label="employerTalkDetails.depatmentName" />
        <cr-icon-light name="map" :label="employerTalkDetails.meetingRoom.name" />
      </view>
      <cr-avatar-name-item
        class="mt-20"
        :name="enterprise.companyFullName"
        :avatar="enterprise.logo"
        :desc="`${enterprise.financingState}·${enterprise.staffSize}·${enterprise.industryName}`"
        @click="navigateToCompanyDetails(enterprise)"
      >
        <template #end>
          <u-icon name="arrow-right" />
        </template>
      </cr-avatar-name-item>
    </view>
    <view class="block mt-20">
      <u-tabs
        class="u-tabs"
        :list="tabs"
        :is-scroll="false"
        v-model="currenIndex"
        @change="handleTabChange"
      ></u-tabs>
      <template v-if="currenIndex === 0">
        <view class="p-30 bg-white">
          <view class="font-title mt-20">报名时间</view>
          <view class="font-desc-light mt-10"
          >{{ employerTalkDetails.applyStartTime }} - {{ employerTalkDetails.applyEndTime }}</view
          >
          <view class="font-title mt-20">岗位介绍</view>
          <view class="font-paragraph mt-10">{{ employerTalkDetails.content }}</view>
        </view>
      </template>
      <template v-if="currenIndex === 1">
        <cr-job-list :list="jobList" />
      </template>
    </view>
    <view class="cr-fixed-bottom">
      <view class="cr-flex-1">
        <view class="font-base-light">{{ employerTalkDetails.studentCount }}人</view>
        <view class="font-paragraph">已报名本场宣讲会</view>
      </view>
      <u-button class="cr-flex-1" type="primary">立即报名</u-button>
    </view>
  </view>
</template>

<style lang="scss">
  .block {
  }
  .icon-list {
    display: flex;
    align-items: center;
  }
</style>
<style>
  page {
    background-color: #f3f8ff;
  }
</style>