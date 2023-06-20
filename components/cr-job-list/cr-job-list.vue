<script setup lang="ts">
  interface Props {
    list: Array<Job>
  }
  const props = withDefaults(defineProps<Props>(), {
    list: () => [],
  })
  const emit = defineEmits<{ (e: 'itemClick', item: Job): void }>()
</script>
<template>
  <view class="job-list" v-if="list.length">
    <cr-job-list-item
      :data="item"
      v-for="item in list"
      @click="emit('itemClick', item)"
    />
  </view>
</template>

<style scoped lang="scss">
</style>
