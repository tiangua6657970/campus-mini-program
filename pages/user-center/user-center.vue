<script setup lang="ts">
  import {
    navigateToAppliedResume,
    navigateToFavoriteJobs,
    navigateToFeedback,
    navigateToInterview,
    navigateToPrivacyAndSecurity,
    navigateToResumeEdit,
    navigateToSettings,
    navigateToTermsOfService
  } from '@/common/navigates'
  import { useUserInfoStore } from '@/stores/user-center'

  const userinfo = useUserInfoStore.data
</script>
<template>
  <view class="user-center" v-if="userinfo">
    <u-navbar :is-back="false" :border-bottom="false" :background="{ background: `transparent` }"></u-navbar>
    <view class="container">
      <view class="background">
        <view class="background-content">
          <view class="userinfo p-30">
            <view class="userinfo__content">
              <view class="font-title">{{ userinfo.nickname }}</view>
            </view>
            <u-avatar :src="userinfo.avatarUrl" size="120" />
          </view>
          <view class="name-number-list bg-white p-20 mt-20">
            <view class="name-number-item" @click="navigateToAppliedResume">
              <view class="font-base-grey">已投简历</view>
              <view class="font-base-light mt-10">123</view>
            </view>
            <view class="name-number-item" @click="navigateToInterview">
              <view class="font-base-grey">待面试</view>
              <view class="font-base-light mt-10">123</view>
            </view>
            <view class="name-number-item" @click="navigateToInterview">
              <view class="font-base-grey">已面试</view>
              <view class="font-base-light mt-10">123</view>
            </view>
            <view class="name-number-item" @click="navigateToFavoriteJobs">
              <view class="font-base-grey">收藏职位</view>
              <view class="font-base-light mt-10">123</view>
            </view>
          </view>
        </view>
      </view>
      <view style="margin-top: 580rpx">
        <view class="action-list plr-30 bg-white" style="margin-top: 580rpx">
          <view class="action-item ptb-20 u-border-bottom" @click="navigateToResumeEdit">
            <u-icon class="cr-flex-1" :size="50" color="#1287d2FF" name="cr-icon-resume" label="在线简历"></u-icon>
            <u-icon :size="30" color="#999" name="arrow-right"></u-icon>
          </view>
          <view class="action-item ptb-20 u-border-bottom">
            <u-icon
              class="cr-flex-1"
              :size="50"
              color="#1287d2FF"
              name="cr-icon-resume-copy"
              label="附件简历"
            ></u-icon>
            <u-icon :size="30" color="#999" name="arrow-right"></u-icon>
          </view>
          <view class="action-item ptb-20 u-border-bottom">
            <u-icon
              class="cr-flex-1"
              :size="50"
              color="#1287d2FF"
              name="cr-icon-preference"
              label="求职意向"
            ></u-icon>
            <u-icon :size="30" color="#999" name="arrow-right"></u-icon>
          </view>
          <view class="action-item ptb-20 u-border-bottom" @click="navigateToTermsOfService">
            <u-icon
              class="cr-flex-1"
              :size="50"
              color="#1287d2FF"
              name="cr-icon-termsOfService"
              label="三方协议 "
            ></u-icon>
            <u-icon :size="30" color="#999" name="arrow-right"></u-icon>
          </view>
          <view class="action-item ptb-20 u-border-bottom" @click="navigateToFeedback">
            <u-icon
              class="cr-flex-1"
              :size="50"
              color="#1287d2FF"
              name="cr-icon-feedback"
              label="反馈建议"
            ></u-icon>
            <u-icon :size="30" color="#999" name="arrow-right"></u-icon>
          </view>
          <view class="action-item ptb-20 u-border-bottom" @click="navigateToPrivacyAndSecurity">
            <u-icon
              class="cr-flex-1"
              :size="50"
              color="#1287d2FF"
              name="cr-icon-security"
              label="隐私安全"
            ></u-icon>
            <u-icon :size="30" color="#999" name="arrow-right"></u-icon>
          </view>
          <view class="action-item ptb-20 u-border-bottom" @click="navigateToSettings">
            <u-icon class="cr-flex-1" :size="50" color="#1287d2FF" name="cr-icon-setting" label="设置"></u-icon>
            <u-icon :size="30" color="#999" name="arrow-right"></u-icon>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
  .user-center {
    .container {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    .background {
      background: linear-gradient(to bottom, #fff, #4478fc);
      position: absolute;
      left: 0;
      right: 0;
      height: 560rpx;
      box-shadow: 0 5rpx 20rpx #ffffff;

      .background-content {
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 30rpx 30rpx 0 30rpx;
      }

      .userinfo {
        display: flex;
        align-items: center;
      }

      .userinfo__content {
        flex: 1;
      }

      .name-number-list {
        border-top-left-radius: 15rpx;
        border-top-right-radius: 15rpx;
      }
    }

    .action-item {
      display: flex;
      align-items: center;
    }
  }
</style>
<style>
  page {
    background-color: #f3f8ff;
  }
</style>
