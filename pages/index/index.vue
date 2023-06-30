<script lang="ts" setup>
  import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
  import { useIndexSwiperList, useSearchJobList } from '@/service'
  import {
    navigateTo,
    navigateToJobDetails,
    navigateToJobSearch,
    navigateToResumeDetails,
    pagePaths
  } from '@/common/navigates'
  import { computed, ref, watch, watchEffect } from 'vue'
  import locationStore from '@/stores/location'
  import { useSearchResumeList } from '@/service/resume'
  import { useUserinfoStore } from '@/stores/user-center'

  const addressSelectorShow = ref(false)
  const addressSelectorParams = {
    province: true,
    city: true,
    area: false
  }
  const selectedCity = ref('')
  const currentCity = computed(() => {
    if (selectedCity.value) {
      return selectedCity.value
    }
    if (locationStore.currentCity.value) {
      return locationStore.currentCity.value
    }
    return locationStore.positionStatusText.value
  })
  const currentType = ref('recommend')
  const { swiperList, refresh: refreshSwiperList } = useIndexSwiperList()
  const searchJobEffect = useSearchJobList()
  const searchResumeEffect = useSearchResumeList()
  const userinfo = useUserinfoStore.data
  const effect = userinfo.type === 'student' ? searchJobEffect : searchResumeEffect

  function handleAddressSelectionConfirm(result: any) {
    const { province, city } = result
    selectedCity.value = city.name
    effect.setParamsAndRefresh('address', city.name)
  }

  function handleSwiperClick(index: number) {
    const { jumpPage, params } = swiperList.value[index]
    if (jumpPage) {
      navigateTo(pagePaths[jumpPage], params)
    }
  }

  onReachBottom(() => effect.loadMore())
  onPullDownRefresh(async () => {
    await Promise.all([refreshSwiperList(), effect.refresh()])
    uni.stopPullDownRefresh()
  })
  locationStore.refresh()
  refreshSwiperList()
  watchEffect(e => {
    effect.setParamsAndRefresh('type', currentType.value)
  })
</script>

<template>
  <view class="index">
    <u-navbar title="" :is-back="false" :border-bottom="false" :background="{ background: `transparent` }">
      <template #default>
        <view class="navbar">
          <u-avatar class="mr-20" :size="44"></u-avatar>
          <view class="font-base-white" style="flex: 1">桂林电子科技大学</view>
        </view>
      </template>
    </u-navbar>
    <view class="container">
      <view class="image">
        <u-image class="u-image" src="@/static/images/index-bg.png" height="100%" />
        <view class="search">
          <u-search
            class="u-search"
            placeholder="职位、公司"
            :show-action="false"
            disabled
            @click="navigateToJobSearch"
          ></u-search>
        </view>
      </view>
      <u-swiper
        :list="swiperList"
        :height="360"
        border-radius="0"
        name="pic"
        indicatorMode="dot"
        circular
        @click="handleSwiperClick"
      />
      <view>
        <view class="list-header pt-30 plr-30">
          <view class="list-header-left">
            <view
              class="mr-20"
              :class="currentType === 'recommend' ? 'font-title-light' : 'font-title-grey'"
              @click="currentType = 'recommend'"
              >推荐
            </view>
            <view
              :class="currentType === 'all' ? 'font-title-light' : 'font-title-grey'"
              @click="currentType = 'all'"
              >全部
            </view>
          </view>
          <view class="list-header-right">
            <u-icon
              name="arrow-down"
              size="30"
              :label="currentCity"
              label-pos="left"
              @click="addressSelectorShow = true"
            ></u-icon>
          </view>
        </view>
        <template v-if="userinfo.type === 'student'">
          <cr-job-list :list="searchJobEffect.loadResult.value" @item-click="navigateToJobDetails" />
          <u-loadmore
            :status="searchJobEffect.loadStatus.value"
            v-if="searchJobEffect.loadResult.value.length"
            @loadmore="searchJobEffect.loadMore"
          />
          <cr-empty v-if="searchJobEffect.noData.value" :top="525" />
        </template>
        <template v-else>
          <cr-resume-list :list="searchResumeEffect.loadResult.value" @item-click="navigateToResumeDetails" />
          <u-loadmore
            :status="searchResumeEffect.loadStatus.value"
            v-if="searchResumeEffect.loadResult.value.length"
            @loadmore="searchResumeEffect.loadMore"
          />
          <cr-empty v-if="searchResumeEffect.noData.value" :top="525" />
        </template>
        <u-picker
          v-model="addressSelectorShow"
          mode="region"
          :params="addressSelectorParams"
          @confirm="handleAddressSelectionConfirm"
        ></u-picker>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
  .index {
  }

  .container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;

    .image {
      position: relative;
      height: 276rpx;

      .u-image {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }

      .search {
        position: absolute;
        right: 30rpx;
        bottom: 30rpx;
        left: 30rpx;

        .u-search {
          width: 100%;
        }
      }
    }
  }

  .navbar {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 30rpx;
    overflow: hidden;
  }

  .list-header {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .list-header-left,
    .list-header-right {
      display: flex;
      align-items: center;
    }
  }
</style>
<style>
  page {
    background-color: #f3f8ff;
  }
</style>
