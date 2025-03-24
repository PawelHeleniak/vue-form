<script setup lang="ts">
import FormStep from './components/FormStep.vue'
</script>

<template>
  <header>
    <h1>Formularz</h1>
    <p>Wypełnij dane</p>
  </header>
  <main>
    <FormStep />
  </main>
</template>

<style scoped>
header p {
  font-size: 1.4rem;
  color: var(--text-secondary);
}
</style>
