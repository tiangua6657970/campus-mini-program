<script lang="ts" setup>
  import { getJobList } from '@/service/base'
  getJobList().then(res => console.log(res.data,'res.data'))
</script>

<template>
  <view class="content"> 首页 </view>
</template>

<style></style>