<script setup lang="ts">
  import { favoriteStore } from '@/stores/favorite'
  import { computed } from 'vue'
  interface Props {
    id: string
  }
  const props = defineProps<Props>()
  const isInStore = computed(() => favoriteStore.list.findIndex(item => item === props.id) !== -1)
  function handleToggle() {
    favoriteStore.toggle(props.id)
  }
</script>

<template>
  <u-button>
    <u-icon name="star" :size="30" color="#2b85e4" label="收藏" label-color="#2b85e4" @click="handleToggle" v-if="!isInStore"/>
    <u-icon name="star-fill" :size="30" color="#2b85e4" label="收藏" label-color="#2b85e4" @click="handleToggle" v-else/>
  </u-button>
</template>

<style scoped lang="scss"></style>
