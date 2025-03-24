<script setup lang="ts">
defineProps<{
  step: number
}>()
</script>

<template>
  <div class="stepper">
    <button type="button" @click="$emit('step', 1)" :class="{ active: step === 1 }">1</button>
    <button type="button" @click="$emit('step', 2)" :class="{ active: step === 2 }">2</button>
    <button type="button" @click="$emit('step', 3)" :class="{ active: step === 3 }">3</button>
  </div>
</template>

<style scoped>
button:hover {
  background-color: var(--secondary);
}
.active {
  background-color: var(--primary);
}
</style>
