<script setup lang="ts">
  interface Props {
    avatar: string
    name: string
    desc?: string
    badgeCount?: number
  }

  const props = defineProps<Props>()
  const emit = defineEmits<{
    (e: 'click'): void
  }>()
</script>

<template>
  <view class="cr-avatar-name-item ptb-20 u-border-bottom" @click="emit('click')">
    <template v-if="badgeCount !== undefined">
      <view style="position: relative;">
        <u-avatar :size="88" :src="avatar" />
        <u-badge type="error" count="7" :offset="[-8,-8]"></u-badge>
      </view>
    </template>
    <template v-else>
      <u-avatar :size="88" :src="avatar" />
    </template>
    <view class="cr-avatar-name-item__content">
      <view class="font-title">{{ name }}</view>
      <view class="font-desc mt-10" v-if="desc">{{ desc }}</view>
    </view>
    <slot name="end"></slot>
  </view>
</template>

<style scoped lang="scss">
  .cr-avatar-name-item {
    position: relative;
    display: flex;
    align-items: center;
    background: #ffffff;
  }
  .cr-avatar-name-item__content {
    flex: 1;
    margin-left: 20rpx;
  }
</style>