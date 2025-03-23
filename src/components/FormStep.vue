<script setup lang="ts">
import { ref } from 'vue'

const step = ref(1)

const formData = {
  name: '',
  surname: '',
  birthDate: '',
  phone: '',
  email: '',
  company: '',
  dateFrom: '',
  dateTo: '',
}

const formErrors = ref({
  name: '',
  surname: '',
  birthDate: '',
  phone: '',
  email: '',
  company: '',
  dateFrom: '',
  dateTo: '',
})

const validateStep = () => {
  Object.keys(formErrors.value).forEach(
    (key) => (formErrors.value[key as keyof typeof formErrors.value] = ''),
  )
  switch (step.value) {
    case 1:
      if (!formData.name) {
        formErrors.value.name = 'Pole jest wymagane.'
        return false
      }
      if (!formData.surname) {
        formErrors.value.surname = 'Pole jest wymagane.'
        return false
      }
      if (!formData.birthDate) {
        formErrors.value.birthDate = 'Pole jest wymagane.'
        return false
      } else if (new Date(formData.birthDate) > new Date()) {
        formErrors.value.birthDate = 'Data urodzenia nie może być późniejsza od dzisiejszej.'
        return false
      }
      break

    case 2:
      const phoneRegex = /^\d{9,12}$/
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

      if (!formData.phone) {
        formErrors.value.phone = 'Pole jest wymagane!'
        return false
      } else if (!phoneRegex.test(formData.phone)) {
        formErrors.value.phone = 'Numer telefonu musi być w przedziale 9-12 cyfr.'
        return false
      }
      if (!formData.email) {
        formErrors.value.email = 'Pole jest wymagane!'
        return false
      } else if (!emailRegex.test(formData.email)) {
        formErrors.value.email = 'Niepoprawny format adresu email.'
        return false
      }
      break

    case 3:
      if (!formData.company) {
        formErrors.value.company = 'Pole jest wymagane.'
        return false
      }
      if (!formData.dateFrom) {
        formErrors.value.dateFrom = 'Pole jest wymagane.'
        return false
      } else if (formData.dateFrom > formData.dateTo) {
        formErrors.value.dateFrom = 'Data od nie może być późniejsza od daty do.'
        return false
      }
      if (!formData.dateTo) {
        formErrors.value.dateTo = 'Pole jest wymagane.'
        return false
      } else if (formData.dateFrom < formData.dateTo) {
        formErrors.value.dateTo = 'Data do nie może być wcześniejsza od daty od.'
        return false
      }

    default:
      break
  }
  return true
}

const nextStep = () => {
  if (!validateStep()) return

  step.value++
}
const backStep = () => {
  step.value--
}
const submit = () => {
  if (!validateStep()) return

  console.log('Wysłane', formData)
}
</script>

<template>
  <form>
    <div class="step" v-show="step === 1">
      <div class="input required">
        <label for="name">Imie <span>*</span></label>
        <input type="text" name="name" v-model="formData.name" />
        <small class="error" v-if="formErrors.name">{{ formErrors.name }}</small>
      </div>
      <div class="input required">
        <label for="surname">Nazwisko <span>*</span></label>
        <input type="text" name="surname" v-model="formData.surname" />
        <small class="error" v-if="formErrors.surname">{{ formErrors.surname }}</small>
      </div>
      <div class="input required">
        <label for="birthDate">Data urodzenia <span>*</span></label>
        <input type="date" name="birthDate" v-model="formData.birthDate" />
        <small class="error" v-if="formErrors.birthDate">{{ formErrors.birthDate }}</small>
      </div>
    </div>
    <div class="step" v-show="step === 2">
      <div class="input required">
        <label for="phone">Telefon <span>*</span></label>
        <input type="text" name="phone" v-model="formData.phone" />
        <small class="error" v-if="formErrors.phone">{{ formErrors.phone }}</small>
      </div>
      <div class="input required">
        <label for="email">E-mail <span>*</span></label>
        <input type="text" name="email" v-model="formData.email" />
        <small class="error" v-if="formErrors.email">{{ formErrors.email }}</small>
      </div>
    </div>
    <div class="step" v-show="step === 3">
      <div class="input required">
        <label for="company">Firma <span>*</span></label>
        <input type="text" name="company" v-model="formData.company" />
        <small class="error" v-if="formErrors.company">{{ formErrors.company }}</small>
      </div>
      <div class="input required">
        <label for="dateFrom">Data od <span>*</span></label>
        <input type="date" name="dateFrom" v-model="formData.dateFrom" />
        <small class="error" v-if="formErrors.dateFrom">{{ formErrors.dateFrom }}</small>
      </div>
      <div class="input required">
        <label for="dateTo">Data do <span>*</span></label>
        <input type="date" name="dateTo" v-model="formData.dateTo" />
        <small class="error" v-if="formErrors.dateTo">{{ formErrors.dateTo }}</small>
      </div>
    </div>
    <div class="btn-wrapper">
      <button type="button" v-if="step !== 1" @click="backStep">Wstecz</button>
      <button type="button" v-if="step !== 3" @click="nextStep">Dalej</button>
      <button type="button" v-if="step === 3" @click="submit">Wyślij</button>
    </div>
  </form>
</template>

<style scoped>
.step {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.input {
  display: flex;
  flex-direction: column;
}
.input.required span {
  color: rgb(219, 56, 56);
}
.input input {
  background-color: var(--bg-secondary);
  border: none;
  padding: 12px;
  border-radius: 8px;
  color: var(--text-primary);
}
small.error {
  color: rgb(219, 56, 56);
}
</style>
