<script setup lang="ts">
  import { ref } from 'vue'
  import { useJobFairDetails } from '@/service/job-fair'
  import { calculateNewTime } from '@/common/utils'
  import { useCompanyList } from '@/service/company'
  import { useJobList } from '@/service'
  import { navigateToJobDetails, navigateToCompanyDetails } from '@/common/navigates'

  interface Props {
    id: string
  }

  const props = defineProps<Props>()

  const currenIndex = ref(0)
  const tabs = [{ name: '参与公司' }, { name: '招聘职位' }]
  const { jobFairDetails, refresh } = useJobFairDetails(props)
  const { companyList, refresh: refreshCompanyList, noData: companyNoData } = useCompanyList(props)
  const { jobList, refresh: refreshJobList, noData: jobNoData } = useJobList()
  refresh()
  refreshCompanyList()
  refreshJobList({ id: props.id })
</script>
<template>
  <view class="job-fair-details" v-if="jobFairDetails">
    <u-navbar
      title="招聘会详情"
      title-color="#fff"
      back-icon-color="#fff"
      :border-bottom="false"
      :background="{ background: `transparent` }"
    ></u-navbar>
    <view class="container">
      <u-image class="u-image" src="@/static/images/job-fair-details-bg.png" height="700" />
      <view class="content p-30">
        <view class="block p-20 bg-white">
          <view class="font-title">{{ jobFairDetails.title }}</view>
          <view class="info-list">
            <cr-icon-light
              class="mt-20"
              name="cr-icon-datetime"
              :label="`时间：${calculateNewTime(jobFairDetails.startTime, jobFairDetails.endTime)}`"
            />
            <cr-icon-light
              class="mt-20"
              name="cr-icon-phone"
              :label="`${jobFairDetails.director} ${jobFairDetails.tel}`"
            />
            <cr-icon-light class="mt-20" name="map" :label="jobFairDetails.address" />
          </view>
          <view class="name-number-list mt-20">
            <view class="name-number-item">
              <view class="font-base-grey">参与公司</view>
              <view class="font-base-light mt-10">{{ jobFairDetails.enterpariseCount }}家</view>
            </view>
            <view class="name-number-item">
              <view class="font-base-grey">招聘职位</view>
              <view class="font-base-light mt-10">{{ jobFairDetails.jobCount }}个</view>
            </view>
            <view class="name-number-item">
              <view class="font-base-grey">参与学生人数</view>
              <view class="font-base-light mt-10">{{ jobFairDetails.studentCount }}人</view>
            </view>
          </view>
        </view>
        <view class="list-header">
          <u-tabs class="u-tabs" :list="tabs" :is-scroll="false" v-model="currenIndex"></u-tabs>
          <u-search placeholder="职位、公司" :show-action="false" disabled></u-search>
        </view>
        <template v-if="currenIndex === 0">
          <cr-avatar-name-item
            :avatar="item.logo"
            :name="item.companyFullName"
            :desc="`${item.financingState}${item.staffSize}${item.industryName}`"
            @click="navigateToCompanyDetails(item)"
            v-for="item in companyList"
            :key="item.id"
          >
            <template #end>
              <view class="job-fair-position">
                <text class="font-mini-white">A1</text>
                <text class="font-mini-white">会场位置</text>
              </view>
            </template>
          </cr-avatar-name-item>
          <cr-empty v-if="companyNoData" :top="700" />
        </template>
        <template v-if="currenIndex === 1">
          <cr-job-list :list="jobList" @item-click="navigateToJobDetails" />
          <cr-empty v-if="jobNoData" :top="700" />
        </template>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
  .container {
    position: absolute;
    top: 0;
    width: 100%;
  }
  .job-fair-position {
    display: flex;
    flex-direction: column;
    padding: 10rpx;
    background-color: #2b85e4;
    text-align: center;
    border-radius: 8rpx;
  }

  .content {
    position: absolute;
    top: 375rpx;
    width: 100%;
  }

  .block {
    border-radius: 15rpx;
    box-shadow: 0 5rpx 10rpx #eeeeee;

    .info-list {
      display: flex;
      flex-direction: column;
    }
  }

  .list-header {
    margin-top: 50rpx;
    display: flex;
    align-items: center;

    .u-tabs {
      width: 50%;
    }
  }
</style>