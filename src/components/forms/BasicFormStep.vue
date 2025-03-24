<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  formData: {
    name: string
    surname: string
    birthDate: string
  }
  formErrors: {
    name: string
    surname: string
    birthDate: string
  }
}>()

const emit = defineEmits(['update:formData'])

const today = new Date()
const maxBirthDate = today.toISOString().split('T')[0]
</script>

<template>
  <div class="step">
    <div class="input required">
      <label for="name">Imie <span>*</span></label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Podaj imię"
        :value="props.formData.name"
        @input="
          $emit('update:formData', {
            ...props.formData,
            name: ($event.target as HTMLInputElement).value,
          })
        "
        required
      />
      <small class="error" v-if="props.formErrors.name">{{ props.formErrors.name }}</small>
    </div>
    <div class="input required">
      <label for="surname">Nazwisko <span>*</span></label>
      <input
        type="text"
        name="surname"
        id="surname"
        placeholder="Wpisz nazwisko"
        :value="props.formData.surname"
        @input="
          emit('update:formData', {
            ...props.formData,
            surname: ($event.target as HTMLInputElement).value,
          })
        "
        required
      />
      <small class="error" v-if="props.formErrors.surname">{{ props.formErrors.surname }}</small>
    </div>
    <div class="input required">
      <label for="birthDate">Data urodzenia <span>*</span></label>
      <input
        type="date"
        name="birthDate"
        id="birthDate"
        placeholder="Wpisz date urodzenia"
        :value="props.formData.birthDate"
        @input="
          emit('update:formData', {
            ...props.formData,
            birthDate: ($event.target as HTMLInputElement).value,
          })
        "
        :max="maxBirthDate"
        required
      />
      <small class="error" v-if="props.formErrors.birthDate">{{
        props.formErrors.birthDate
      }}</small>
    </div>
  </div>
</template>

<style scoped lang="scss">
.step {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
