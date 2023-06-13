<script setup lang="ts">
  interface Props {
    data: object
    avatarKey?: string
    nameKey?: string
    descKey?: string
  }
  const props = withDefaults(defineProps<Props>(), {
    avatarKey: 'avatar',
    nameKey: 'name',
    descKey: 'desc'
  })
</script>

<template>
  <view class="cr-avatar-name-item">
    <u-avatar
      class="aa-has-avatar-content-item__avatar"
      :sex-icon="data.sex!"
      :show-sex="!!data.sex"
      :size="44"
      :src="data[avatarKey]"
    ></u-avatar>
    <view class="cr-avatar-name-item__content">
      <view class="cr-avatar-name-item__title font-title">{{ data[nameKey] }}</view>
      <view class="cr-avatar-name-item__desc font-desc" v-if="data[descKey]">{{ data[descKey] }}</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .cr-avatar-name-item {
    display: flex;
    align-items: center;
    background: #ffffff;
  }
  .cr-avatar-name-item__content {
    flex: 1;
    margin-left: 20rpx;
  }
  .cr-avatar-name-item__title {
  }
  .cr-avatar-name-item__desc {
    margin-top: 8rpx;
  }
</style>
