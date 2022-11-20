<template>
  <i>{{ icon }}</i>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon: string
}>(), {
  icon: '默认icon'
})
</script>