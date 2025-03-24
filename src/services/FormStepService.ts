import type { FormData } from '@/models/FormStepModel'

export const submitForm = async (formData: FormData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        console.log('Dane z FormStepService:', formData)
        resolve('Wysłano formularz.')
      } else {
        reject('Wystąpił błąd podczas wysyłania formularza.')
      }
    }, 1500)
  })
}
