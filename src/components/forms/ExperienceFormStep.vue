<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  formData: {
    name: string
    surname: string
    birthDate: string
    phone: string
    email: string
    experiences: Array<{ company: string; position: string; dateFrom: string; dateTo: string }>
  }
  formErrors: {
    name: string
    surname: string
    birthDate: string
    phone: string
    email: string
    experiences: Array<{ company?: string; position?: string; dateFrom?: string; dateTo?: string }>
  }
}>()

const emit = defineEmits<{
  (e: 'update:formData', value: typeof props.formData): void
  (e: 'update:formErrors', value: typeof props.formErrors): void
}>()

const addExperience = () => {
  const newExperience = { company: '', position: '', dateFrom: '', dateTo: '' }
  const newExperienceErrors = { company: '', position: '', dateFrom: '', dateTo: '' }

  emit('update:formData', {
    ...props.formData,
    experiences: [...props.formData.experiences, newExperience],
  })
  emit('update:formErrors', {
    ...props.formErrors,
    experiences: [...props.formErrors.experiences, newExperienceErrors],
  })
}
const removeExperience = (index: number) => {
  const updatedExperiences = props.formData.experiences.filter((_, i) => i !== index)
  emit('update:formData', { ...props.formData, experiences: updatedExperiences })
}
</script>

<template>
  <div class="step">
    <div class="step-item" v-for="(experience, index) in props.formData.experiences" :key="index">
      <div class="input required">
        <label :for="'company' + index">Firma <span>*</span></label>
        <input
          type="text"
          name="company"
          :id="'company' + index"
          :value="experience.company"
          @input="
            emit('update:formData', {
              ...props.formData,
              experiences: props.formData.experiences.map((exp, i) =>
                i === index ? { ...exp, company: ($event.target as HTMLInputElement).value } : exp,
              ),
            })
          "
          required
        />
        <small class="error" v-if="props.formErrors.experiences[index]?.company">{{
          props.formErrors.experiences[index]?.company
        }}</small>
      </div>
      <div class="input required">
        <label for="position">Stanowisko <span>*</span></label>
        <input
          type="text"
          name="position"
          id="position"
          :value="experience.position"
          @input="
            emit('update:formData', {
              ...props.formData,
              experiences: props.formData.experiences.map((exp, i) =>
                i === index ? { ...exp, position: ($event.target as HTMLInputElement).value } : exp,
              ),
            })
          "
          required
        />
        <small class="error" v-if="props.formErrors.experiences[index]?.position">{{
          props.formErrors.experiences[index]?.position
        }}</small>
      </div>
      <div class="input required">
        <label for="dateFrom">Data od <span>*</span></label>
        <input
          type="date"
          name="dateFrom"
          id="dateFrom"
          :value="experience.dateFrom"
          @input="
            emit('update:formData', {
              ...props.formData,
              experiences: props.formData.experiences.map((exp, i) =>
                i === index ? { ...exp, dateFrom: ($event.target as HTMLInputElement).value } : exp,
              ),
            })
          "
          required
        />
        <small class="error" v-if="props.formErrors.experiences[index]?.dateFrom">{{
          props.formErrors.experiences[index]?.dateFrom
        }}</small>
      </div>
      <div class="input required">
        <label for="dateTo">Data do <span>*</span></label>
        <input
          type="date"
          name="dateTo"
          id="dateTo"
          :value="experience.dateTo"
          @input="
            emit('update:formData', {
              ...props.formData,
              experiences: props.formData.experiences.map((exp, i) =>
                i === index ? { ...exp, dateTo: ($event.target as HTMLInputElement).value } : exp,
              ),
            })
          "
          required
        />
        <small class="error" v-if="props.formErrors.experiences[index]?.dateTo">{{
          props.formErrors.experiences[index]?.dateTo
        }}</small>
      </div>
      <button @click="removeExperience(index)">Usuń</button>
    </div>
    <button @click="addExperience">Dodaj stanowisko</button>
  </div>
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
