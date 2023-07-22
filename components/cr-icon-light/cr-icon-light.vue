<script setup lang="ts">
  interface Props {
    name: string
    label?: string
    bold?: boolean
    labelPos?: 'right' | 'bottom' | 'top' | 'left'
  }
  defineProps<Props>()
  const emit = defineEmits<{
    (e: 'click'): void
  }>()
</script>

<template>
  <u-icon
    :name="name"
    size="30"
    label-size="24"
    color="#2b85e4"
    label-color="#2b85e4"
    :label="label"
    :bold="bold!"
    :label-pos="labelPos!"
    @click="emit('click')"
  />
</template>

<style scoped lang="scss"></style>
