import { z } from 'zod'

const envSchema = z.object({
  DB_CONNECTION: z.string().url().min(1),
})

export const env = envSchema.parse(process.env)
