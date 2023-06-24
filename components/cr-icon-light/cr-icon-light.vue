<script setup lang="ts">
  interface Props {
    name: string
    label?: string
  }
  defineProps<Props>()
  const emit = defineEmits<{
    (e: 'click'): void
  }>()
</script>

<template>
  <u-icon :name="name" size="30" label-size="24" color="#2b85e4" :label="label" @click="emit('click')" />
</template>

<style scoped lang="scss"></style>