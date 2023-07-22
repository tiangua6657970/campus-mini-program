<script setup lang="ts">
interface Props {
  list: {name: string, content: string}[]
}
const props = defineProps<Props>()
</script>

<template>
  <view class="name-number-list">
    <view class="name-number-item" v-for="item in list" :key="item.name">
      <view class="font-base-grey">{{item.name}}</view>
      <view class="font-base-light mt-10">{{item.content}}</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
</style>