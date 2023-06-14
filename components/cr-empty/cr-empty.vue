<script setup lang="ts">
  type Mode =
    | 'car'
    | 'page'
    | 'search'
    | 'address'
    | 'wifi'
    | 'order'
    | 'coupon'
    | 'favor'
    | 'permission'
    | 'history'
    | 'news'
    | 'message'
    | 'list'
    | 'data'
  interface Props {
    top: number
    mode: Mode
  }
  withDefaults(defineProps<Props>(), { show: false, top: 0, mode: 'list' })
</script>

<template>
  <view class="aa-empty" :style="{ top: top + 'rpx' }">
    <u-empty :mode="mode"></u-empty>
  </view>
</template>

<style scoped lang="scss">
  .aa-empty {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>