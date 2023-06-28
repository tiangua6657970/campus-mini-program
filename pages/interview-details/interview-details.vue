<script setup lang="ts">
  import { useInterviewDetail } from '@/service/interview'
  import { navigateToCompanyDetails } from '@/common/navigates'

  const { interviewDetail, refresh } = useInterviewDetail()
  refresh()
  const statusMap = {
    0: '待面试',
    1: '已面试',
    2: '已取消',
    3: '已超时'
  }
  const alertTipsTypeMap = {
    0: 'primary',
    1: 'success',
    3: 'info',
    2: 'warning'
  }
</script>
<template>
  <view class="interview-details p-30" v-if="interviewDetail">
    <cr-company-item class="mt-20" :company="interviewDetail.job.enterprise" @click="navigateToCompanyDetails" />
    <view class="info-list mt-50">
      <view class="info-item mb-20">
        <cr-icon-light name="clock" :label="interviewDetail.agreeTime" />
      </view>
      <view class="info-item mb-20">
        <cr-icon-light name="email" :label="interviewDetail.job.positionName" />
      </view>
      <view class="info-item mb-20">
        <cr-icon-light name="phone" :label="`${interviewDetail.contact}${interviewDetail.tel}`" />
        <u-icon name="cr-icon-phone" size="40" color="#2b85e4" />
      </view>
      <view class="info-item mb-20">
        <cr-icon-light name="map" :label="interviewDetail.address" />
        <u-icon name="cr-icon-navigation" size="40" color="#2b85e4" bold />
      </view>
    </view>
    <view class="cr-fixed-bottom">
      <u-alert-tips
        class="cr-flex-1"
        :type="alertTipsTypeMap[interviewDetail.status]"
        :description="statusMap[interviewDetail.status]"
      ></u-alert-tips>
      <u-button class="ml-10" :type="'primary'" v-if="interviewDetail.status === '0'">取消面试</u-button>
      <u-button class="ml-10">
        <u-icon name="share" :size="30" color="#2b85e4" label="联系Ta" label-color="#2b85e4" />
      </u-button>
    </view>
  </view>
</template>

<style lang="scss">
  .info-item {
    @include between-center();
  }
  .status {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50rpx;
  }
</style>
