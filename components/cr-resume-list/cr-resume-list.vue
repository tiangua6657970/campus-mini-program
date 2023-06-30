<script setup lang="ts">
  interface Props {
    list: Resume[]
  }
  defineProps<Props>()
  const emit = defineEmits<{
    (e: 'itemClick', resume: Resume): void
  }>()
</script>

<template>
  <view class="cr-resume-list">
    <view
      class="cr-resume-item p-30 mb-20 bg-white"
      v-for="item in list"
      :key="item.studentInfo.id"
      @click="emit('itemClick', item)"
    >
      <view class="header">
        <view class="header-content">
          <view class="font-title">{{ item.studentInfo.realName }}</view>
          <view class="mt-10 font-desc"
            >桂林电子科技大学 | {{ item.studentInfo.educationLevel }} | {{ item.studentInfo.majorName }}</view
          >
        </view>
        <u-avatar
          :size="88"
          show-sex
          :sex-icon="item.studentInfo.sex"
          :src="item.studentInfo.avatarUrl"
        ></u-avatar>
      </view>
      <template v-if="item.expectedJobs[0]">
        <view class="info-item mt-10">
          <text class="font-desc">期望薪资：</text>
          <text class="font-sub-title">{{ item.expectedJobs[0].salaryRange }}</text>
        </view>
        <view class="info-item mt-10">
          <text class="font-desc">期望职位：</text>
          <text class="font-sub-title">{{ item.expectedJobs[0].expectedPosition }}</text>
        </view>
      </template>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    .header-content {
      flex: 1;
    }
  }
</style>
