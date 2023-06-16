<script setup lang="ts">
  const props = defineProps<{ company: Company }>()
  const emit = defineEmits<{
    (e: 'click', company: Company): void
  }>()
</script>

<template>
  <view class="cr-company-item" @click="emit('click', company)">
    <u-avatar class="cr-company-item__avatar" :size="88" :src="company.logo!"></u-avatar>
    <view class="cr-company-item__content">
      <view class="cr-company-item__title font-title">{{ company.companyFullName }}</view>
      <view class="cr-company-item__desc font-desc"
        >{{ company.financingState + ' ' + company.staffSize + ' ' + company.industryName }}
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .cr-company-item {
    display: flex;
    align-items: center;
    background: #ffffff;
  }

  .cr-company-item__content {
    flex: 1;

    .cr-company-item {
      display: flex;
      align-items: center;
      background: #ffffff;
    }

    .cr-company-item__content {
      flex: 1;
      margin-left: 20rpx;
    }

    .cr-company-item__title {
    }

    .cr-company-item__desc {
      margin-top: 8rpx;
    }

    margin-left: 20rpx;
  }

  .cr-company-item__title {
  }

  .cr-company-item__desc {
    margin-top: 8rpx;
  }
</style>