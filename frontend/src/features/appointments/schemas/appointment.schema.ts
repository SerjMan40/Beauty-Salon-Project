import { z } from 'zod'

export const appointmentSchema = z.object({
  serviceId: z.string().min(1, 'Выберите услугу'),
  masterId: z.string().min(1, 'Выберите мастера'),
  date: z.iso.date('Выберите корректную дату'),
  time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'Выберите корректное время'),
})

export type AppointmentFormValues = z.infer<typeof appointmentSchema>
