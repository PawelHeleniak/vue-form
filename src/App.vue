<script setup lang="ts">
import FormStep from './components/FormStep.vue'
</script>

<template>
  <header>
    <h1>Formularz</h1>
    <p>Uzupełnij dane</p>
  </header>
  <main>
    <FormStep />
  </main>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
  p {
    font-size: 1.4rem;
    color: var(--text-secondary);
  }
}
main {
  width: 100%;
}
</style>
