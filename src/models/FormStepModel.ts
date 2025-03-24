export interface FormData {
  name: string
  surname: string
  birthDate: string
  phone: string
  email: string
  experiences: Experience[]
}
interface Experience {
  company: string
  position: string
  dateFrom: string
  dateTo: string
}
