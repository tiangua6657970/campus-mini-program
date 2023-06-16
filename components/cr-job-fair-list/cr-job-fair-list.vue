<script setup lang="ts">
  import { calculateNewTime } from '@/common/utils'

  interface Props {
    list: JobFair[]
  }

  const props = defineProps<Props>()
  const emit = defineEmits<{
    (e: 'itemClick', item: JobFair): void
  }>()
</script>

<template>
  <view class="cr-job-fair-list">
    <view class="cr-job-fair-item p-30 mb-20" v-for="item in list" :key="item.id" @click="emit('itemClick', item)">
      <view class="cr-job-fair-item-header">
        <u-tag class="mr-20" size="mini" text="报名中" mode="dark" type="primary" v-if="item.status === 1" />
        <u-tag class="mr-20" size="mini" text="已开始" mode="light" type="success" v-if="item.status === 2" />
        <u-tag class="mr-20" size="mini" text="已结束" mode="plain" type="info" v-if="item.status === 3" />
        <view class="font-title">{{ item.title }}</view>
      </view>
      <view class="info-list mt-20">
        <cr-icon-light name="cr-icon-company" :label="`参会企业：${item.enterpariseCount}`" />
        <cr-icon-light class="mt-10" name="account" :label="`在招职位：${item.studentCount}`" />
        <cr-icon-light
          class="mt-10"
          name="cr-icon-datetime"
          :label="`时间：${calculateNewTime(item.startTime!,item.endTime!)}`"
        />
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .cr-job-fair-item {
    background-color: #fff;
  }

  .cr-job-fair-item-header {
    display: flex;
    align-items: center;
  }

  .info-list {
    display: flex;
    flex-direction: column;
  }
</style>
