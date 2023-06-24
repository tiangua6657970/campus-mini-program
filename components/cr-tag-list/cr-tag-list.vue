<script setup lang="ts">
  interface Props {
    list: Array<string>
    mode?: string
    size?: 'default' | 'mini'
    closeable?: boolean
  }
  const props = withDefaults(defineProps<Props>(), {
    list: () => [],
    mode: 'light',
    size: 'mini',
    closeable: false
  })
  const emit = defineEmits<{
    (e: 'itemClick', item: string): void
    (e: 'itemClose', item: string): void
  }>()
</script>

<template>
  <view class="cr-tag-list">
    <u-tag
      class="cr-tag-item mr-20 mt-10"
      :text="benefitItem"
      mode="light"
      :closeable="closeable!"
      :size="size!"
      v-for="benefitItem in list"
      :key="benefitItem"
      @click="emit('itemClick', benefitItem)"
      @close="emit('itemClose', benefitItem)"
    />
  </view>
</template>

<style scoped lang="scss">
  .cr-tag-list {
    @include center-wrap();
  }
</style>
