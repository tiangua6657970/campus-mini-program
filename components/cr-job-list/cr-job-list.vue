<script setup lang="ts">

interface Props {
    list: Array<Job>
  }
  const props = defineProps<Props>()
</script>
<template>
  <view class="job-list">
    <view class="job-list-item" v-for="item in list">
      <view class="job-list-item__title font-title">{{ item.positionName }}</view>
      <view class="job-list-item__block mt-20">
        <u-tag class="job-list-item__block-item mr-20" type="info" :text="item.city" />
        <u-tag class="job-list-item__block-item mr-20" type="info" :text="item.educationLevel" />
        <u-tag class="job-list-item__block-item mr-20" type="info" :text="item.depatmentName" />
      </view>
      <view class="job-list-item__block mt-20">
        <u-tag
          class="job-list-item__block-item mr-20 mt-10"
          :text="benefitItem"
          mode="light"
          v-for="benefitItem in item.jobBenefits.split(',')"
        />
      </view>
      <cr-avatar-name-item class="mt-20" :data="item.enterprise" avatar-key="logo" name-key="companyFullName" />
      <view class="job-list-item__money"> {{ item.minSalary + '-' + item.maxSalary + 'k' }}</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .job-list {
    background-color: #f3f8ff;
  }
  .job-list-item {
    position: relative;
    margin-top: 20rpx;
    padding: 30rpx;
    background-color: #fff;
    .job-list-item__title {
      font-size: 32rpx;
      color: #1a1a1a;
    }
    .job-list-item__block {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    .job-list-item__money {
      position: absolute;
      right: 30rpx;
      top: 30rpx;
      font-size: 32rpx;
      font-weight: bold;
      color: #FF5A00;
    }
  }
</style>
