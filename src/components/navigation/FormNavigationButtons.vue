<script setup lang="ts">
defineProps<{
  step: number
}>()
</script>

<template>
  <div class="btn-wrapper">
    <button type="button" v-if="step !== 1" @click="$emit('back')">Wstecz</button>
    <button type="button" v-if="step !== 3" @click="$emit('next')">Dalej</button>
    <button type="button" v-if="step === 3" @click="$emit('submit')">Wyślij</button>
  </div>
</template>

<style scoped></style>
