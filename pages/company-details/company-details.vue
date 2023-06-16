<script setup lang="ts">
  import { useCompanyDetails } from '@/service/company'
  import { ref } from 'vue'
  import { useSearchJobList } from '@/service'
  import { navigateToJobDetails } from '@/common/navigates'

  interface Props {
    id: number
  }
  const props = defineProps<Props>()
  const currenIndex = ref(0)
  const { companyDetails, refresh } = useCompanyDetails(props)
  const { loadResult: jobList, noData, setParamsAndRefresh } = useSearchJobList()
  refresh()
  setParamsAndRefresh('id', props.id)
</script>
<template>
  <view class="company-details">
    <template v-if="companyDetails">
      <u-navbar
        ref="navbarRef"
        back-text="返回"
        :back-text-style="{ color: '#fff' }"
        back-icon-color="#fff"
        title-color="#fff"
        title="企业详情"
        :border-bottom="false"
        :background="{ background: 'transparent' }"
      ></u-navbar>
      <view class="container">
        <view style="height: 360rpx"></view>
        <view class="container__block p-30 bg-white">
          <view class="font-title">{{ companyDetails.companyShortName }}</view>
          <view class="font-desc mt-20">{{ companyDetails.industryName }} | {{ companyDetails.staffSize }}人</view>
          <cr-tag-list class="mt-20" :list="companyDetails.welfare.split(',')" v-if="companyDetails.welfare" />
        </view>
        <view class="container__block p-30 bg-white mt-20">
          <u-tabs
            :list="[{ name: '公司简介' }, { name: '招聘职位' }]"
            :is-scroll="false"
            v-model="currenIndex"
          ></u-tabs>
          <template v-if="currenIndex === 0">
            <view class="font-paragraph mt-20">
              {{ companyDetails.content }}
            </view>
            <view class="font-title mt-20">公司地址</view>
            <view class="font-paragraph mt-20">{{ companyDetails.address }}</view>
            <view class="font-title mt-20">联系方式</view>
            <view class="info-list mt-20">
              <view class="info-item mb-20">
                <u-icon name="account" size="30" color="#2b85e4" :label="companyDetails.enterpriseContact" />
                <u-icon name="cr-icon-navigation" size="40" color="#2b85e4" bold />
              </view>
              <view class="info-item mb-20">
                <u-icon name="cr-icon-phone" size="30" color="#2b85e4" :label="companyDetails.enterpriseTel" />
                <u-icon name="cr-icon-phone" size="40" color="#2b85e4" bold />
              </view>
              <view class="info-item">
                <u-icon name="email" size="30" color="#2b85e4" :label="companyDetails.enterpriseEmail" />
              </view>
            </view>
          </template>
          <template v-if="currenIndex === 1">
            <cr-job-list-item
              :data="item"
              :mode="'withBorder'"
              :show-benefits="false"
              :show-company="false"
              @click="navigateToJobDetails"
              v-for="item in jobList"
            />
            <cr-empty v-if="noData" :top="360" />
          </template>
        </view>
      </view>
    </template>
  </view>
</template>

<style lang="scss">
  .company-details {
    .container {
      position: absolute;
      background-image: url('static/images/common-bg.png');
      background-repeat: no-repeat;
      background-size: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
    }
    .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
<style>
  page {
    background-color: #f3f8ff;
  }
</style>