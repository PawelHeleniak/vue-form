<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  formData: {
    phone: string
    email: string
  }
  formErrors: {
    phone: string
    email: string
  }
}>()

const emit = defineEmits(['update:formData'])
</script>
<template>
  <form>
    <div class="step">
      <div class="input required">
        <label for="phone">Telefon <span>*</span></label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Wpisz numer telefonu"
          :value="props.formData.phone"
          @input="
            emit('update:formData', {
              ...props.formData,
              phone: ($event.target as HTMLInputElement).value,
            })
          "
          required
        />
        <small class="error" v-if="props.formErrors.phone">{{ props.formErrors.phone }}</small>
      </div>
      <div class="input required">
        <label for="email">Email <span>*</span></label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Wpisz email"
          :value="props.formData.email"
          @input="
            emit('update:formData', {
              ...props.formData,
              email: ($event.target as HTMLInputElement).value,
            })
          "
          required
        />
        <small class="error" v-if="props.formErrors.email">{{ props.formErrors.email }}</small>
      </div>
    </div>
  </form>
</template>

<style scoped>
.step {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
