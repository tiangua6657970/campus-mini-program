<script setup lang="ts">
  import { calculateNewTime } from '@/common/utils'

  interface Props {
    list: EmployerTalk[]
  }

  const props = defineProps<Props>()
  const emit = defineEmits<{
    (e: 'itemClick', item: EmployerTalk): void
  }>()
</script>

<template>
  <view class="cr-employer-talk-list">
    <view class="cr-employer-talk-item p-30" v-for="item in list" :key="item.id" @click="$emit('itemClick', item)">
      <u-image class="cr-employer-talk-item-image" :src="item.logo" width="200" height="200" />
      <view class="cr-employer-talk-item-content">
        <view class="title-and-tag">
          <view class="font-title">{{ item.title }}</view>
          <cr-tag-list class="mt-10" :list="item.jobTags.split(',')" />
        </view>
        <view class="icon-list">
          <cr-icon-light name="account" :label="`在招职位：${item.studentCount}`" />
          <cr-icon-light
            class="mt-10"
            name="cr-icon-datetime"
            :label="`时间：${calculateNewTime(item.startTime, item.endTime)}`"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .cr-employer-talk-item {
    background-color: #fff;
    display: flex;
    margin-bottom: 20rpx;

    .cr-employer-talk-item-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 20rpx;
    }
  }
</style>
