<script setup lang="ts">

interface Props {
    data: Job
  }

  const props = defineProps<Props>()
  const emit = defineEmits<{
    (e: 'click', data: Job): void
  }>()
</script>

<template>
  <view class="job-list-item p-30 mb-20 u-border-bottom" @click.stop="emit('click', data)" v-if="data">
    <view class="job-list-item__title font-title">{{ data.positionName }}</view>
    <view class="job-list-item__block mt-20">
      <u-tag class="mr-20" size="mini" mode="plain" type="info" border-color="#eee" :text="data.city" />
      <u-tag class="mr-20" size="mini" mode="plain" type="info" border-color="#eee" :text="data.educationLevel" />
      <u-tag class="mr-20" size="mini" mode="plain" type="info" border-color="#eee" :text="data.depatmentName" />
    </view>
    <view class="job-list-item__block mt-20">
      <cr-tag-list :list="data.enterprise.welfare.split(',')" />
    </view>
    <view class="job-list-item__company mt-20">
      <u-avatar class="aa-has-avatar-content-item__avatar mr-20" :size="44" :src="data.enterprise.logo"></u-avatar>
      <view class="cr-avatar-name-item__title font-base">{{ data.enterprise.companyFullName }}</view>
    </view>
    <view class="job-list-item__money font-money"> {{ data.salaryRange }}</view>
  </view>
</template>

<style scoped lang="scss">
  .job-list-item {
    position: relative;
    background-color: #fff;

    .job-list-item__title {
      font-size: 32rpx;
      color: #1a1a1a;
    }

    .job-list-item__block {
      @include center-wrap();
    }

    .job-list-item__company {
      display: flex;
      align-items: center;
    }

    .job-list-item__money {
      position: absolute;
      top: 20rpx;
      right: 20rpx;
    }
  }
</style>
