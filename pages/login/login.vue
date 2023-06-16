<script setup lang="ts">
  import { loginWithWx } from '@/service/auth'
  import { ref } from 'vue'

  const userInfo = ref({
    avatarUrl: ''
  })
  function wechatLogin() {
    uni.login({
      success: loginRes => {
        console.log(loginRes, 'loginRes.authResult')
        uni.getUserInfo({
          provider: 'weixin',
          success: async infoRes => {
            const { data } = await loginWithWx({
              code: loginRes.code,
              rawData: infoRes.rawData,
              signature: infoRes.signature,
              encryptedData: infoRes.encryptedData,
              iv: infoRes.iv
            })
            userInfo.value = data.userInfo
          }
        })
      }
    })
  }
</script>
<template>
  <view>
    <hd-button @click="wechatLogin">登录</hd-button>
    <hd-image :src="userInfo.avatarUrl" :width="200" :height="200" />
  </view>
</template>

<style lang="scss"></style>