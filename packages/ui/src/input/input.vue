<template>
  <div>
    <input type="text" placeholder="第一个input框" v-model="value" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref<string>('第一个值');
</script>