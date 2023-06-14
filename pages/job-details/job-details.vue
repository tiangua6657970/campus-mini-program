<script setup lang="ts">
  import { useJobDetails } from '@/service'

  interface Props {
    id: number
  }
  const props = defineProps<Props>()
  const { jobDetails, refresh } = useJobDetails(props)
  refresh()
</script>
<template>
  <view class="job-details p-30" v-if="jobDetails">
    <view class="job-details-base">
      <view class="font-title">{{ jobDetails.positionName }}</view>
      <view class="info-list-h mt-20">
        <u-icon class="mr-20" color="#2b85e4" :size="30" name="map" :label="jobDetails.city"></u-icon>
        <u-icon
          class="mr-20"
          color="#2b85e4"
          :size="30"
          name="cr-icon-workExperience"
          :label="jobDetails.workExperience + '年'"
        ></u-icon>
        <u-icon
          class="mr-20"
          color="#2b85e4"
          :size="30"
          name="cr-icon-educationLevel"
          :label="jobDetails.educationLevel"
        ></u-icon>
      </view>
      <view class="job-details-base__money font-money">{{
        jobDetails.minSalary + '-' + jobDetails.maxSalary + 'k'
      }}</view>
    </view>
    <cr-company-item :company="jobDetails.enterprise" />
    <view class="font-title-light">岗位职责</view>
    <view class="font-paragraph" v-for="item in jobDetails.jobResponsibility.split('；')">{{ item }}</view>
    <view class="font-title-light">任职要求</view>
    <view class="font-paragraph" v-for="item in jobDetails.jobRequirement.split('；')">{{ item }}</view>
    <view class="font-title-light">职位福利</view>
  </view>
</template>

<style lang="scss">
  .job-details-base {
    position: relative;
    margin-bottom: 50rpx;
    .info-list-h {
      display: flex;
      align-items: center;
    }
    .job-details-base__money {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .font-title-light {
    margin: 30rpx 0;
  }
</style>
<style>
  page {
    background-color: #ffffff;
  }
</style>
