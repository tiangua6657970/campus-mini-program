<script setup lang="ts">
  import { useResumeInfo } from '@/service/resume'
  import { computed } from 'vue'
  import {
    navigateResumeBaseEdit,
    navigateToResumeJobPreferenceAdd,
    navigateToResumeProjectExperienceAdd,
    navigateToResumeWorkExperienceAdd
  } from '@/common/navigates'

  const { resumeInfo, refresh } = useResumeInfo()
  const studentInfo = computed(() => resumeInfo.value?.studentInfo)
  const expectedJobs = computed(() => resumeInfo.value?.expectedJobs)
  const workExperiences = computed(() => resumeInfo.value?.workExperiences)
  const projectExperiences = computed(() => resumeInfo.value?.projectExperiences)

  refresh()
</script>
<template>
  <view class="resume-details" v-if="resumeInfo">
    <view class="block p-30 bg-white" v-if="studentInfo">
      <view class="block-header">
        <view class="font-title">{{ studentInfo.realName }}</view>
        <cr-icon-light name="cr-icon-edit" @click="navigateResumeBaseEdit" />
      </view>
      <view class="block-content-wrapper u-flex mt-20">
        <view class="block-content cr-flex-1">
          <view class="font-desc">{{ studentInfo.birthdate }}|{{ studentInfo.majorName }}</view>
          <view class="icon-list mt-10">
            <cr-icon-light name="email" :label="studentInfo.email" />
            <cr-icon-light name="phone" :label="studentInfo.mobile" />
          </view>
        </view>
        <u-avatar :src="studentInfo.avatarUrl" size="100" />
      </view>
    </view>
    <view class="block p-30 mt-20 bg-white" v-if="expectedJobs">
      <view class="block-header">
        <view class="font-sub-title">求职期望</view>
        <cr-icon-light name="plus-circle" @click="navigateToResumeJobPreferenceAdd('add')" />
      </view>
      <view class="expected-job-list">
        <view
          class="expected-job-item ptb-20 u-border-bottom"
          v-for="item in expectedJobs"
          :key="item.id"
          @click="navigateToResumeJobPreferenceAdd('edit')"
        >
          <view class="expected-job-item__content mr-20">
            <view class="font-desc"
              >{{ item.expectedPosition }}·{{ item.workType }}·{{ item.expectedSalary }}
            </view>
            <view class="font-desc mt-10">{{ item.expectedCity }}·{{ item.expectedIndustryName }}</view>
            <view class="font-desc mt-10">{{ item.arrivalDate }}</view>
          </view>
          <cr-icon-light name="arrow-right" />
        </view>
      </view>
    </view>
    <view class="block p-30 mt-20 bg-white" v-if="workExperiences">
      <view class="block-header">
        <view class="font-sub-title">工作经历</view>
        <cr-icon-light name="plus-circle" @click="navigateToResumeWorkExperienceAdd('add')" />
      </view>
      <view class="work-experience-list">
        <view
          class="work-experience-item ptb-20 u-border-bottom"
          v-for="item in workExperiences"
          :key="item.id"
          @click="navigateToResumeWorkExperienceAdd('edit')"
        >
          <view class="work-experience-item__content mr-20">
            <view class="font-desc">{{ item.startDate }}-{{ item.endDate }} {{ item.companyName }}</view>
            <view class="font-desc mt-10">{{ item.positionName }}</view>
            <view class="font-paragraph mt-10">{{ item.workContent }}</view>
          </view>
          <cr-icon-light name="arrow-right" />
        </view>
      </view>
    </view>
    <view class="block p-30 mt-20 bg-white" v-if="projectExperiences">
      <view class="block-header">
        <view class="font-sub-title">项目经历</view>
        <cr-icon-light name="plus-circle" @click="navigateToResumeProjectExperienceAdd('add')" />
      </view>
      <view class="project-experience-list">
        <view
          class="project-experience-item ptb-20 u-border-bottom"
          v-for="item in projectExperiences"
          :key="item.id"
          @click="navigateToResumeProjectExperienceAdd('edit')"
        >
          <view class="project-experience-item__content mr-20">
            <view class="font-desc">{{ item.startDate }}-{{ item.endDate }} {{ item.projectName }}</view>
            <view class="font-paragraph mt-10">{{ item.responsibilities }}</view>
          </view>
          <cr-icon-light name="arrow-right" />
        </view>
      </view>
    </view>
    <view class="block p-30 mt-20 bg-white">
      <view class="block-header">
        <view class="font-sub-title">教育经历</view>
        <cr-icon-light name="plus-circle" />
      </view>
    </view>
    <view class="block p-30 mt-20 bg-white" v-if="studentInfo">
      <view class="block-header">
        <view class="font-sub-title">其他技能</view>
        <cr-icon-light name="plus-circle" />
      </view>
      <cr-tag-list class="mt-10" :list="studentInfo.skills.split(',')" />
    </view>
    <view class="block p-30 mt-20 bg-white" v-if="studentInfo">
      <view class="block-header">
        <view class="font-sub-title">自我评价</view>
        <cr-icon-light name="cr-icon-edit" />
      </view>
      <view class="font-paragraph mt-20">{{ studentInfo.introduce }}</view>
    </view>
  </view>
</template>

<style lang="scss">
  .block-header {
    display: flex;
    justify-content: space-between;
  }

  .expected-job-item {
    @include between-center();
  }

  .work-experience-item {
    @include between-center();
  }

  .project-experience-item {
    @include between-center();
  }
</style>
<style>
  page {
    background-color: #f3f8ff;
  }
</style>
