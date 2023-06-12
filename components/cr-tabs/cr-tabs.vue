<script setup lang="ts">
  interface tabsProps {
    test: string
  }
  const emit = defineEmits<{
    (event: 'itemClick'): void
  }>()

  const props = defineProps<tabsProps>()
</script>

<template>
  <view class="container">{{ test }}</view>
</template>

<style scoped></style>
