<script setup lang="ts">
import { ref } from 'vue'
import BasicFormStep from './forms/BasicFormStep.vue'
import ContactFormStep from './forms/ContactFormStep.vue'
import WorkExperienceFormStep from './forms/ExperienceFormStep.vue'
import FormStepper from './navigation/FormStepper.vue'
import FormNavigationButtons from './navigation/FormNavigationButtons.vue'

const step = ref(1)

const formData = ref({
  name: '',
  surname: '',
  birthDate: '',
  phone: '',
  email: '',
  experiences: [
    {
      company: '',
      position: '',
      dateFrom: '',
      dateTo: '',
    },
  ],
})

const formErrors = ref({
  name: '',
  surname: '',
  birthDate: '',
  phone: '',
  email: '',
  experiences: [
    {
      company: '',
      position: '',
      dateFrom: '',
      dateTo: '',
    },
  ],
})
const resetErrors = () => {
  formErrors.value = {
    name: '',
    surname: '',
    birthDate: '',
    phone: '',
    email: '',
    experiences: [
      {
        company: '',
        position: '',
        dateFrom: '',
        dateTo: '',
      },
    ],
  }
}
const validateStep = () => {
  resetErrors()
  switch (step.value) {
    case 1:
      if (!formData.value.name) {
        formErrors.value.name = 'Pole jest wymagane.'
        return false
      }
      if (!formData.value.surname) {
        formErrors.value.surname = 'Pole jest wymagane.'
        return false
      }
      if (!formData.value.birthDate) {
        formErrors.value.birthDate = 'Pole jest wymagane.'
        return false
      } else if (new Date(formData.value.birthDate) > new Date()) {
        formErrors.value.birthDate = 'Data urodzenia nie może być późniejsza od dzisiejszej.'
        return false
      }
      break

    case 2:
      const phoneRegex = /^\d{9,12}$/
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

      if (!formData.value.phone) {
        formErrors.value.phone = 'Pole jest wymagane!'
        return false
      } else if (!phoneRegex.test(formData.value.phone)) {
        formErrors.value.phone = 'Numer telefonu musi być w przedziale 9-12 cyfr.'
        return false
      }
      if (!formData.value.email) {
        formErrors.value.email = 'Pole jest wymagane!'
        return false
      } else if (!emailRegex.test(formData.value.email)) {
        formErrors.value.email = 'Niepoprawny format adresu email.'
        return false
      }
      break

    case 3:
      console.log(formData.value.experiences)
      console.log(formErrors.value.experiences)

      for (let index = 0; index < formData.value.experiences.length; index++) {
        console.log(formErrors.value.experiences)
        console.log(index)

        if (!formData.value.experiences[index].company) {
          formErrors.value.experiences[index].company = 'Pole jest wymagane.'
          return false
        }
      }

      return true
    default:
      break
  }
  return true
}
//   if (!formData.value.position) {
//     formErrors.value.position = 'Pole jest wymagane.'
//     return false
//   }
//   if (!formData.value.dateFrom) {
//     formErrors.value.dateFrom = 'Pole jest wymagane.'
//     return false
//   }
//   if (!formData.value.dateTo) {
//     formErrors.value.dateTo = 'Pole jest wymagane.'
//     return false
//   }
//   const fromDate = new Date(formData.value.dateFrom)
//   const toDate = new Date(formData.value.dateTo)
//   if (fromDate > toDate) {
//     formErrors.value.dateFrom = 'Data od nie może być późniejsza od daty do.'
//     formErrors.value.dateTo = 'Data do nie może być wcześniejsza od daty od.'
//     return false
//   }

const handleStep = (newStep: number) => {
  const currentStep = step.value

  if (currentStep < newStep) {
    for (let i = currentStep; i < newStep; i++) {
      nextStep()
    }
  } else if (currentStep > newStep) {
    for (let i = newStep; i < currentStep; i++) {
      backStep()
    }
  }
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

const updateFormError = () => {
  validateStep()
}
// const updateFormData = (updatedData: typeof formData.value) => {
//   formData.value = updatedData
// }
</script>

<template>
  <FormStepper :step="step" @step="handleStep"></FormStepper>
  <form>
    <BasicFormStep
      v-if="step === 1"
      v-model:formData="formData"
      :formErrors="formErrors"
      @update:formData="updateFormError"
    />
    <ContactFormStep
      v-if="step === 2"
      v-model:formData="formData"
      :formErrors="formErrors"
      @update:formData="updateFormError"
    />
    <WorkExperienceFormStep
      v-if="step === 3"
      v-model:formData="formData"
      :formErrors="formErrors"
      @update:formData="updateFormError"
    />
  </form>
  <FormNavigationButtons
    @next="nextStep"
    @back="backStep"
    @submit="submit"
    :step="step"
  ></FormNavigationButtons>
</template>

<style scoped></style>
