<script setup lang="ts">
  interface Props {
    list: Array<string>
    mode?: string,
    size?: 'default' | 'mini'
  }
  const props = withDefaults(defineProps<Props>(), {
    list: () => [],
    mode: 'light',
    size: 'mini'
  })
  const emit = defineEmits<{
    (e: 'itemClick', item: string): void
  }>()
</script>

<template>
  <view class="cr-tag-list">
    <u-tag
      class="cr-tag-item mr-20 mt-10"
      :text="benefitItem"
      mode="light"
      :size="size!"
      v-for="benefitItem in list"
      @click="emit('itemClick', benefitItem)"
    />
  </view>
</template>

<style scoped lang="scss">
  .cr-tag-list {
    @include center-wrap();
  }
</style>