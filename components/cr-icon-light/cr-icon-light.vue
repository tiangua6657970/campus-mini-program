<script setup lang="ts">
interface Props  {
  name: string,
  label?: string
}
defineProps<Props>()
</script>

<template>
  <u-icon :name="name" size="30" label-size="24" color="#2b85e4" :label="label" />
</template>

<style scoped lang="scss">

</style>