<script setup lang="ts">
defineProps<{
  step: number
}>()
</script>

<template>
  <div class="stepper">
    <button
      class="stepper__button"
      type="button"
      @click="$emit('step', 1)"
      :class="{ 'stepper__button--active': step === 1, 'stepper__button--complete': step > 1 }"
    >
      <div class="stepper__button-step">1</div>
      <div class="stepper__button-name">Dane podstawowe</div>
    </button>
    <button
      class="stepper__button"
      type="button"
      @click="$emit('step', 2)"
      :class="{ 'stepper__button--active': step === 2, 'stepper__button--complete': step > 2 }"
    >
      <div class="stepper__button-step">2</div>
      <div class="stepper__button-name">Dane kontaktowe</div>
    </button>
    <button
      class="stepper__button"
      type="button"
      @click="$emit('step', 3)"
      :class="{ 'stepper__button--active': step === 3, 'stepper__button--complete': step > 3 }"
    >
      <div class="stepper__button-step">3</div>
      <div class="stepper__button-name">Doświadczenie zawodowe</div>
    </button>
  </div>
</template>

<style scoped lang="scss">
.stepper {
  display: flex;
  justify-content: space-between;
  &__button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: transparent;
    flex-basis: 33.3%;
    color: var(--bg-primary);
    &-step {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 40px;
      aspect-ratio: 1;
      background-color: var(--bg-primary-25);
    }
    &-name {
      max-width: min-content;
      color: var(--bg-primary-25);
    }
  }
}
.stepper__button--active {
  .stepper__button-step {
    background-color: var(--primary);
  }
  .stepper__button-name {
    color: var(--primary);
  }
}
.stepper__button--complete {
  .stepper__button-step {
    background-color: var(--bg-primary-75);
  }
  .stepper__button-name {
    color: var(--bg-primary-75);
  }
}
</style>
