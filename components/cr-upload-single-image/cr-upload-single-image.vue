<script setup lang="ts">
  import { computed, ref, watch } from 'vue'

  interface Props {
    defaultAvatarSrc?: string
  }

  const props = defineProps<Props>()
  const imageSrc = ref('')
  watch(
    () => props.defaultAvatarSrc,
    newVal => {
      if (newVal) {
        imageSrc.value = newVal
      }
    }
  )
  const uploadRef = ref()
  const uploadConfig = {
    autoUpload: false,
    action: 'xx'
  }

  function getFileList() {
    return uploadRef.value.lists
  }

  function upload() {
    uploadRef.value.upload()
  }

  defineExpose({
    getFileList,
    upload
  })

  function handleChooseComplete(e: any) {
    imageSrc.value = e[0].url
    console.log(e[0].url, 'e')
  }
</script>

<template>
  <u-upload
    ref="uploadRef"
    :auto-upload="uploadConfig.autoUpload"
    :action="uploadConfig.action"
    custom-btn
    :show-upload-list="false"
    @on-choose-complete="handleChooseComplete"
  >
    <template #addBtn>
      <view class="upload-avatar-wrapper">
        <u-avatar class="upload-avatar" :size="200" :src="imageSrc" />
      </view>
    </template>
  </u-upload>
</template>

<style scoped lang="scss">
  .upload-avatar-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>