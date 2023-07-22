<script setup lang="ts">
  import { useResumeInfo } from '@/service/resume'
  import { computed } from 'vue'
  import { navigateToComInterviewInvitation, navigateToComRefusedResumes } from '@/common/navigates'
  import useResumeStore from '@/stores/resume'

  const { resumeInfo, refresh } = useResumeInfo()
  const resumeStore = useResumeStore()
  const studentInfo = computed(() => resumeStore.state.value?.studentInfo)
  const workExperiences = computed(() => resumeStore.state.value?.workExperiences)
  const expectedJobs = computed(() => resumeStore.state.value?.expectedJobs)
  const projectExperiences = computed(() => resumeStore.state.value?.projectExperiences)
  refresh(resume => resumeStore.updateResumeStore(resume))
  function transformTime(inputTime: string) {
    // 将输入时间转换为 Date 对象
    const inputDate = new Date(inputTime)

    // 获取年和月
    const year = inputDate.getFullYear()
    const month = inputDate.getMonth() + 1 // 月份从 0 开始，所以需要加 1

    // 创建输出字符串
    return year + '年' + month + '月'
  }
</script>
<template>
  <view class="resume-details" v-if="studentInfo && expectedJobs && workExperiences && projectExperiences">
    <view class="p-30 mb-20 bg-white u-flex">
      <view class="cr-flex-1 mr-20">
        <view class="font-title">{{ studentInfo.realName }}</view>
        <view class="font-desc mt-10"
          >{{ studentInfo.birthdate }} | {{ studentInfo.educationLevel }} | {{ studentInfo.majorName }}</view
        >
        <view class="icon-list mt-10">
          <cr-icon-light class="mr-20" name="email" :label="studentInfo.email" />
          <cr-icon-light name="cr-icon-phone" :label="studentInfo.mobile" />
        </view>
      </view>
      <u-avatar :size="88" show-sex :sex-icon="studentInfo.sex" :src="studentInfo.avatarUrl"></u-avatar>
    </view>

    <view class="p-30 mb-20 bg-white">
      <view class="font-title">求职期望</view>
      <view class="content ptb-20 u-border-bottom" v-for="expectedJob in expectedJobs" :key="expectedJob.id">
        <view class="mt-10">
          <text class="font-sub-title">{{ expectedJob.expectedPosition }}</text>
          <text class="ml-10 mr-10 font-base">·</text>
          <text class="font-desc-light">{{ expectedJob.workType }}</text>
          <text class="ml-10 mr-10 font-base">·</text>
          <text class="font-desc-light">{{ expectedJob.salaryRange }}</text>
        </view>
        <view class="mt-10">
          <text class="font-desc">{{ expectedJob.expectedCity }}</text>
          <text class="font-desc">{{ expectedJob.expectedIndustryName }}</text>
        </view>
        <view class="mt-10 font-desc">{{ expectedJob.arrivalDate }}</view>
      </view>
    </view>

    <view class="p-30 mb-20 bg-white">
      <view class="font-title">工作经历</view>
      <view
        class="content ptb-20 u-border-bottom"
        v-for="workExperience in workExperiences"
        :key="workExperience.id"
      >
        <view class="font-desc"
          >{{ transformTime(workExperience.startDate) }}-{{ transformTime(workExperience.endDate) }}</view
        >
        <view class="mt-10 font-sub-title">
          <text>{{ workExperience.companyName }}</text>
          <text class="ml-10 mr-10 font-base">·</text>
          <text>{{ workExperience.positionName }}</text>
        </view>
        <view class="mt-10 font-paragraph">{{ workExperience.workContent }}</view>
      </view>
    </view>
    <view class="p-30 mb-20 bg-white">
      <view class="font-title">项目经历</view>
      <view
        class="content ptb-20 u-border-bottom"
        v-for="projectExperience in projectExperiences"
        :key="projectExperience.id"
      >
        <view class="font-desc"
          >{{ transformTime(projectExperience.startDate) }}-{{ transformTime(projectExperience.endDate) }}</view
        >
        <view class="mt-10">
          <u-link :href="projectExperience.projectLink" :under-line="true">{{
            projectExperience.projectName
          }}</u-link>
        </view>
        <view class="mt-10 font-paragraph">{{ projectExperience.projectContent }}</view>
      </view>
    </view>
    <view class="p-30 mb-20 bg-white">
      <view class="font-title">教育经历</view>
    </view>
    <view class="p-30 mb-20 bg-white">
      <view class="font-title">其他技能</view>
      <view class="content mt-20">
        <cr-tag-list :list="studentInfo.skills.split(',')" />
      </view>
    </view>
    <view class="p-30 mb-20 bg-white">
      <view class="font-title">自我评价</view>
      <template v-if="studentInfo">
        <view class="content mt-20">
          <view class="font-paragraph">{{ studentInfo.introduce }}</view>
        </view>
      </template>
    </view>
    <view class="margin-fixed-bottom"></view>
    <view class="cr-fixed-bottom">
      <cr-favorite class="ml-10" id="1203"></cr-favorite>
      <cr-icon-light class="ml-20" label-pos="bottom" name="phone" label="联系ta" />
      <cr-icon-light
        class="ml-20"
        label-pos="bottom"
        name="phone"
        label="不合适"
        @click="navigateToComRefusedResumes(studentInfo.id)"
      />
      <u-button class="ml-20 cr-flex-1" type="primary" @click="navigateToComInterviewInvitation(studentInfo.id)"
        >邀请面试</u-button
      >
    </view>
  </view>
</template>

<style lang="scss"></style>
<style>
  page {
    background-color: #f3f8ff;
  }
</style>