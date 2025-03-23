<script setup lang="ts">
import FormStep from './components/FormStep.vue'
import FormNavigation from './components/FormNavigation.vue'

interface Header {
  name: string
  step: number
}

const header: Header[] = [
  {
    name: 'dane podstawowe',
    step: 1,
  },
  {
    name: 'dane kontaktowe',
    step: 2,
  },
  {
    name: 'doświadczenie zawodowe',
    step: 3,
  },
]

const step: number = 1
</script>

<template>
  <header>
    <h1>Formularz</h1>
    <p>Wypełnij {{ header[step - 1].name }}</p>
  </header>
  <main>
    <FormNavigation :step="step"></FormNavigation>
    <FormStep />
  </main>
</template>

<style scoped>
header p {
  font-size: 1.4rem;
  color: var(--text-secondary);
}
</style>
