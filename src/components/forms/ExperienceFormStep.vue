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
}>()

const addExperience = () => {
  const newExperience = { company: '', position: '', dateFrom: '', dateTo: '' }

  emit('update:formData', {
    ...props.formData,
    experiences: [...props.formData.experiences, newExperience],
  })
}
const removeExperience = (index: number) => {
  const updatedExperiences = props.formData.experiences.filter((_, i) => i !== index)
  emit('update:formData', { ...props.formData, experiences: updatedExperiences })
}
</script>

<template>
  <div class="step">
    <div class="step__item" v-for="(experience, index) in props.formData.experiences" :key="index">
      <div class="step__field">
        <div class="input required">
          <label :for="'company' + index">Firma <span>*</span></label>
          <input
            type="text"
            name="company"
            :id="'company' + index"
            :value="experience.company"
            placeholder="Wpisz nazwę firmy"
            @input="
              emit('update:formData', {
                ...props.formData,
                experiences: props.formData.experiences.map((exp, i) =>
                  i === index
                    ? { ...exp, company: ($event.target as HTMLInputElement).value }
                    : exp,
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
            placeholder="Wpisz stanowisko"
            :value="experience.position"
            @input="
              emit('update:formData', {
                ...props.formData,
                experiences: props.formData.experiences.map((exp, i) =>
                  i === index
                    ? { ...exp, position: ($event.target as HTMLInputElement).value }
                    : exp,
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
            placeholder="Wpisz date od"
            :value="experience.dateFrom"
            @input="
              emit('update:formData', {
                ...props.formData,
                experiences: props.formData.experiences.map((exp, i) =>
                  i === index
                    ? { ...exp, dateFrom: ($event.target as HTMLInputElement).value }
                    : exp,
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
            placeholder="Wpisz date do"
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
      </div>
      <button class="step__delete" type="button" @click="removeExperience(index)">-</button>
    </div>
    <button class="step__add" type="button" @click="addExperience">Dodaj stanowisko</button>
  </div>
</template>

<style scoped lang="scss">
.step {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  &__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
  }
  &__field {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
  &__delete {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    border-radius: var(--radius);
    margin-left: 10px;
    margin-top: 24px;
    background-color: var(--primary);
    transition: 0.2s ease-in background-color;
    color: #fff;
    &:hover {
      background-color: var(--secondary);
    }
  }
  &__add {
    width: max-content;
    margin: 0 auto;
    padding: 12px 16px;
    border-radius: var(--radius);
    background-color: var(--primary);
    transition: 0.2s ease-in background-color;
    color: #fff;
    &:hover {
      background-color: var(--secondary);
    }
  }
}
@media only screen and (min-width: 480px) {
  .step {
    &__field {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  }
}
@media only screen and (min-width: 1024px) {
  .step {
    gap: 1rem;
    &__field {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }
  }
  .input {
    max-width: 205px;
  }
}
</style>
