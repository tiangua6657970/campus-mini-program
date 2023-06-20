<script setup lang="ts">
  import { navigateToVerification } from '@/common/navigates'
</script>
<template>
  <view class="role-selection">
    <u-navbar
      title-color="#fff"
      back-icon-color="#fff"
      :border-bottom="false"
      :background="{ background: `transparent` }"
    ></u-navbar>
    <view class="root">
      <u-image src="@/static/images/auth-bg.png" width="100%" height="100%" />
      <view class="content">
        <u-image class="u-image" src="@/static/images/role-selection.png" width="490" height="396" />
        <u-button class="u-margin-top-50" type="primary" @click="navigateToVerification('学生验证')">我要找工作</u-button>
        <u-button class="u-margin-top-50" type="primary" @click="navigateToVerification('企业验证')">我要招人</u-button>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
  .root {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .u-image {
        margin-bottom: 150rpx;
      }
    }
  }
</style>