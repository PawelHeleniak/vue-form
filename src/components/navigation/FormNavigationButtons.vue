<script setup lang="ts">
defineProps<{
  step: number
}>()
</script>

<template>
  <div class="wrapper">
    <button
      class="wrapper__button wrapper__button-back"
      type="button"
      v-if="step !== 1"
      @click="$emit('back')"
    >
      Wstecz
    </button>
    <button
      class="wrapper__button wrapper__button-next"
      type="button"
      v-if="step !== 3"
      @click="$emit('next')"
    >
      Dalej
    </button>
    <button
      class="wrapper__button wrapper__button-submit"
      type="button"
      v-if="step === 3"
      @click="$emit('submit')"
    >
      Wyślij
    </button>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 20px;

  &__button {
    padding: 16px 20px;
    background-color: var(--primary);
    border-radius: 25px;
    min-width: 100px;
    width: 100%;
    transition: 0.2s ease-in background;
    color: #fff;
    &:hover {
      background-color: var(--secondary);
    }
    &-back {
      margin-right: auto;
      background-color: var(--bg-primary-50);
      &:hover {
        background-color: var(--bg-primary-25);
      }
    }
  }
}
@media only screen and (min-width: 480px) {
  .wrapper {
    flex-direction: row;
    &__button {
      width: max-content;
    }
  }
}
</style>
