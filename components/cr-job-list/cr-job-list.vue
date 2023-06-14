<script setup lang="ts">
  interface Props {
    list: Array<Job>
  }

  const props = defineProps<Props>()
  const emit = defineEmits<{ (e: 'itemClick', item: Job): void }>()
</script>
<template>
  <view class="job-list" v-if="list.length">
    <view class="job-list-item" v-for="item in list" @click="emit('itemClick', item)">
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
      <view class="job-list-item__company mt-20">
        <u-avatar
          class="aa-has-avatar-content-item__avatar mr-20"
          :size="44"
          :src="item.enterprise.logo!"
        ></u-avatar>
        <view class="cr-avatar-name-item__title font-base">{{ item.enterprise.companyFullName }}</view>
      </view>
      <view class="job-list-item__money font-money"> {{ item.minSalary + '-' + item.maxSalary + 'k' }}</view>
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
      @include center-wrap();
    }

    .job-list-item__company {
      display: flex;
      align-items: center;
    }

    .job-list-item__money {
      position: absolute;
      right: 30rpx;
      top: 30rpx;
    }
  }
</style>