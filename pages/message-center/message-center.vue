<script setup lang="ts">
/**
 *
 *
 * 还未确定这个消息列表如何做，可做像微信聊天列表那样的
 *
 *
 *
 */
  import { onPullDownRefresh } from '@dcloudio/uni-app'
  import { useMessageList } from '@/service/message'
  import { formatDateStartByMonth } from '@/common/utils'

  const { messageList, refresh } = useMessageList()
  onPullDownRefresh(async () => {
    await refresh()
    uni.stopPullDownRefresh()
  })
  refresh()
</script>

<template>
  <view class="message-center">
    <view class="p-30">
      <cr-avatar-name-item
        :avatar="item.logo"
        :name="item.title"
        :desc="item.content"
        v-for="item in messageList"
        :key="item.id"
      >
        <template #end>
          <view class="datetime font-desc">{{ formatDateStartByMonth(item.datetime) }}</view>
        </template>
      </cr-avatar-name-item>
    </view>
  </view>
</template>

<style lang="scss">
  .datetime {
    position: absolute;
    top: 20rpx;
    right: 20rpx;
  }
</style>
