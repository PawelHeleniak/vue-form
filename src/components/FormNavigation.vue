<script setup lang="ts">
defineProps<{
  step: number
}>()
</script>

<template>
  <div class="stepper">
    <div class="step">{{ step }}</div>
  </div>
</template>

<style scoped></style>
