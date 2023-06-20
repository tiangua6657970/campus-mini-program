<script setup lang="ts">
  import { onReady } from '@dcloudio/uni-app'
  import { loginWithWx } from '@/service/auth'
  import { reactive, ref } from 'vue'
  import { useCode } from '@/common/hooks/use-code'
  import { toast } from '@/common/utils'
  import { navigateToRoleSelection } from '@/common/navigates'
  import { formRules, placeholders } from '@/common/hooks/use-form'
  import { _getUserinfo } from "@/service/user-center";
  import { useUserInfoStore } from "@/stores/user-center";

  const currenIndex = ref(0)
  const formRef = ref()
  const form = reactive({
    phone: '',
    code: '',
    studentCode: '123465',
    password: '123465',
    acceptLicense: true
  })
  const tabs = [{ name: '学号登录' }, { name: '手机登录' }]

  const { tips, seconds, getCode, codeChange, uCodeRef, end, start } = useCode()
  onReady(() => {
    const { phone, code, studentCode, password } = formRules
    formRef.value.setRules({
      phone,
      code,
      studentCode,
      password
    })
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
            // userInfo.value = data.userInfo
          }
        })
      }
    })
  }

  function save() {
    formRef.value.validate(async (valid: boolean) => {
      if (valid) {
        if (!form.acceptLicense) {
          toast('您还没有同意隐私协议')
          return
        }
        console.log(form, 'form')
        const data = await _getUserinfo()
        useUserInfoStore.update(data)
        navigateToRoleSelection()
      }
    })
  }
</script>
<template>
  <view class="login">
    <u-navbar
      title="登录"
      title-color="#fff"
      back-icon-color="#fff"
      :border-bottom="false"
      :background="{ background: `transparent` }"
    ></u-navbar>
    <view class="root">
      <u-image class="u-image" src="@/static/images/auth-bg.png" width="100%" height="100%" />
      <view class="container plr-30">
        <view class="logo">
          <u-image src="@/static/logo.png" width="120" height="120" />
          <view class="cr-flex-1 ml-20 font-title-white">欢迎登录 桂电校招平台</view>
        </view>
        <view class="content-wrapper">
          <view class="content">
            <u-tabs class="u-tabs" :list="tabs" :is-scroll="false" v-model="currenIndex"></u-tabs>
            <u-form :model="form" ref="formRef">
              <template v-if="currenIndex === 0">
                <u-form-item label-width="auto" label="学号" prop="studentCode">
                  <u-input v-model="form.studentCode" clearable :placeholder="placeholders.studentCode" />
                </u-form-item>
                <u-form-item label-width="auto"  label="密码" prop="password">
                  <u-input v-model="form.password" clearable :placeholder="placeholders.password" type="password" />
                </u-form-item>
              </template>
              <template v-if="currenIndex === 1">
                <u-form-item label-width="auto" label="手机号" prop="phone">
                  <u-input v-model="form.phone" clearable :placeholder="placeholders.phone" />
                </u-form-item>
                <u-form-item label-width="auto" label="验证码" prop="code">
                  <u-input v-model="form.code" clearable :placeholder="placeholders.code" />
                  <template #right>
                    <view class="font-desc-light" @click="getCode">{{ tips }}</view>
                  </template>
                </u-form-item>
              </template>
              <u-button class="u-margin-top-50" type="primary" @click="save">登录</u-button>
            </u-form>
          </view>
        </view>
        <view class="licenses">
          <u-checkbox :label-size="0" :icon-size="30" shape="circle" v-model="form.acceptLicense"></u-checkbox>
          <view>
            <text class="font-desc">同意</text>
            <text class="font-desc-light">《隐私协议》</text>
          </view>
        </view>
      </view>
    </view>
    <u-verification-code
      :seconds="seconds"
      @end="end"
      @start="start"
      ref="uCodeRef"
      @change="codeChange"
    ></u-verification-code>
  </view>
</template>

<style lang="scss">
  .root {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .container {
      position: absolute;
      top: 200rpx;
      bottom: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .logo {
      padding: 0 30rpx 100rpx 30rpx;
      display: flex;
      align-items: center;
    }
    .content-wrapper {
      width: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      background-color: #fff;
      border-top-left-radius: 15rpx;
      border-top-right-radius: 15rpx;
    }
    .content {
      width: 100%;
      padding: 30rpx;
    }
    .licenses {
      display: flex;
      align-items: center;
      margin-bottom: 80rpx;
    }
  }
</style>