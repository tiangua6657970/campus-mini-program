<script setup lang="ts">
  import { useJobDetails } from '@/service'
  import { navigateToComJobAdd, navigateToCompanyDetails } from "@/common/navigates";
  import { useUserinfoStore } from "@/stores/user-center";

  interface Props {
    id: string
  }

  const props = defineProps<Props>()
  const { jobDetails, refresh } = useJobDetails(props)
  const userinfo = useUserinfoStore.data
  console.log(userinfo,'userinfo')
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
          :label="jobDetails.experienceYears"
        ></u-icon>
        <u-icon
          class="mr-20"
          color="#2b85e4"
          :size="30"
          name="cr-icon-educationLevel"
          :label="jobDetails.educationLevel"
        ></u-icon>
      </view>
      <view class="job-details-base__money font-money">{{ jobDetails.salaryRange }} </view>
    </view>
    <cr-company-item :company="jobDetails.enterprise" @click="navigateToCompanyDetails" />
    <view class="font-title-light">岗位职责</view>
    <view class="font-paragraph" v-for="item in jobDetails.jobResponsibility.split('；')" :key="item">{{
      item
    }}</view>
    <view class="font-title-light">任职要求</view>
    <view class="font-paragraph" v-for="item in jobDetails.jobRequirement.split('；')" :key="item">{{
      item
    }}</view>
    <view class="font-title-light">职位福利</view>
    <cr-tag-list :list="jobDetails.enterprise.welfare.split(',')" />
    <view style="height: 120rpx"></view>
    <view class="cr-fixed-bottom">
      <template v-if="userinfo.type === 'student'">
        <u-button class="cr-flex-1" :type="'primary'">我要投简历</u-button>
        <u-button class="ml-10" open-type="share">
          <u-icon
            name="share"
            :size="30"
            color="#2b85e4"
            label="分享"
            label-color="#2b85e4"
            @click="$emit('share')"
          />
        </u-button>
        <cr-favorite class="ml-10" :id="id"></cr-favorite>
      </template>
      <template v-else>
        <u-button class="cr-flex-1" type="primary" @click="navigateToComJobAdd(jobDetails.id)">编辑</u-button>
      </template>
    </view>
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
